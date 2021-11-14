import React from 'react';   
import { Route, Link,  } from 'react-router-dom'; 
import User from './User';  
import Todo from './Todo';
import Post from './Post';
import Add from './Add';
import EditUser from './EditUser';
import Comment from './Comment';

const App=()=>{
  return(
    <>
<div>  
      <h1 className="text-success">HOME PAGE</h1>  
      <ul className="list-group">  
        <li className="list-group-item list-group-item-primary">  
          <Link to="/User">User</Link>  
        </li>   
        <li className= "list-group-item list-group-item-secondary">  
          <Link to="/Todo">Todo</Link>  
        </li>  
        <li className="list-group-item list-group-item-success">  
          <Link to="/Post">Post</Link>  
        </li>  
      </ul>  
        <li className="list-group-item list-group-item-success">  
          <Link to="/Comment">Comment</Link>  
        </li>
        
        <li className="list-group-item list-group-item-success">  
          <Link className ="btn btn-outline-light mr-2" to="/Add">CreateUser</Link>  
        </li>
      <Route exact path="/User" component={User} />       
      <Route path="/Todo/:id" component={Todo} />  
      <Route path="/Post/:id" component={Post} /> 
      <Route path="/Add" component={Add} /> 
      <Route path="/EditUser/:id" component={EditUser} /> 
      <Route path="/Comment/:id" component={Comment} /> 
        
    </div>
    </>
  )
}
export default App
