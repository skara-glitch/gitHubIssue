import React from 'react';
import { BrowserRouter as  Router, Link, Route, Switch } from 'react-router-dom';
import './index.css'
const Navbar = () => {
    return (

<>     
     <Router>
        
        <nav id = "menubar">
         <ul id="menubar-1">
          <li>
            <Link className="link" to="/"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
          </li>
          <li className="search">
               <input type="text"  placeholder="Search of jump to..." />
          </li>
          <li>
            <Link className="link" to="#">Pull requests</Link>
          </li>
          <li>
            <Link className="link" to="#">Issues</Link>
          </li>
          <li>
            <Link className="link" to="#">Marketplace</Link>
          </li>
          <li> <Link className="link" to = "#" >Explore</Link></li>
          <li><Link className="link" to = "#"><i class="fa fa-bell " ></i></Link></li>
          <li><Link className="link" to = "#"><i class="fa fa-plus"></i></Link></li>
          <li><Link className="link" to = "#"><i class="fa fa-user-circle"></i></Link></li>
      
        </ul>
      </nav>
      <h2><b>Enter the Name of the Organisation and Respective Repositary in below fields to find all open issues</b></h2>
     
   <div id= "justToClearFloat">
     </div>
    <br/>
  </Router>
  </>
  
    );
};

export default Navbar;