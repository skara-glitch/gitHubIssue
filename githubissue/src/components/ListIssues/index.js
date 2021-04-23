import React from 'react';
import './index.css'
const ListIssues = (props) => {
    //  console.log("hello",props.issue);
    return (
        <>
            {(props.isPullRequest(props.issue))
                ?
                <></>
                :
                <li className= "issues">
                    <svg className="logo" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                        <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
                        </svg>
                   <span > {props.issue.title}  {}</span><br/>
                   <span id="extraDetails">#{props.issue.number} opened by {props.issue.user.login} </span>
                </li>
            }
        
        </>
    );
};

export default ListIssues;