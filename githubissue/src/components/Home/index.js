import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ListIssues from '../ListIssues';
import Repo from '../Repo';
import './index.css'

const Home = (props) => {
    // console.log(props.owner,props.repo)
    const [issues,setIssues] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageCount,setPageCount] = useState();
    const [flag,setFlag] = useState(0);
    const fetchIssues = () =>{
        fetch(
            `https://api.github.com/repos/${props.owner}/${props.repo}/issues?page=${currentPage}&per_page=40`
            ).then((response) =>{
                // console.log("issue",response.headers.get('Link'))
                var s = response.headers.get('Link').split(",")[1].split("page=")[1]
                //   console.log(s.slice(0,s.indexOf('>')).slice(0,s.indexOf('&')));
                if (currentPage === 1)
                    setPageCount(s.slice(0,s.indexOf('>')).slice(0,s.indexOf('&')));
                return response.json();
            }).then((result) =>{
                console.log(result[1]);
                setFlag(1);
                setIssues(result);
            }).catch((e)=>{
                setIssues([]);
                setFlag(-1)
            })
    }
    const isPullRequest = (issue) =>{
        
        if (issue.pull_request)
        {
            return true;
        }
        return false;
    }

    
    useEffect(()=>{  
        console.log(props.owner,props.repo)
        if(props.owner && props.repo)   
            fetchIssues();
    },[currentPage,props.owner,props.repo])
    
    const handleClick = (e)=>{
        setCurrentPage(e.selected+1)
    }
    const handleIssues = issues.map((issue)=>{
        return <ListIssues issue = {issue}  isPullRequest = {isPullRequest}/>
    })
  
    return (
        <div>

            <ul id ="container">
                {handleIssues} 
            </ul>
           {(flag==1) ?
            <ReactPaginate
                previousLabel ={"Previous"}
                nextLabel = {"Next"}
                breakLabel = {"..."}
                breakClassName = {"break-me"}
                pageCount = {pageCount}
                marginPagesDisplayed = {2}
                pageRangeDisplayed = {2}
                onPageChange = {handleClick}
                containerClassName ={"pagination"}
                subContainerClassName = {"page pagination"}
                activeClassName = {"active"}
            />
            :
            (flag === 0)?
            <></>:
            <>
            <p style= {{color:"red" }}>404 This is not the web Page you are looking for</p>
            </>
           }
               
        </div>
    );
};

export default Home;