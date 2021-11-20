//import axios from "axios";
import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";
//import { viewTodo } from "../actions";
import { useSelector, useDispatch } from 'react-redux';
import { todoRequest } from "../thunks/showTodo";

function Todo (props) {
  const dispatch = useDispatch();
  const viewTodos = useSelector((state) => state.viewTodos.viewTodo); 
  
  const {id}=useParams();  
    
    useEffect(()=>{
      dispatch(todoRequest(id));
    },[])

    //   const loadUser= async () =>{
    //     const res = await axios.get(`http://localhost:3008/users/${id}/todos` );
    //     console.log(res)
    //     const todoAction=viewTodo(res.data);
    //     dispatch(todoAction);
    // }

    return(
        <>
          <div className ="d-flex flex-row bd-highlight mb-3">
            <div>
              <ul>
                <h5 className ="text-danger">UserID</h5>
                {viewTodos.map(post =>(
                  <li key={post.id}>{post.userId}</li>
        ))}
          </ul>
          </div>
              <div>
                <ul>
                  <h5 className ="text-danger">ID</h5>
                    {viewTodos.map(post =>(
                      <li key={post.id}>{post.id}</li>
        ))}
          </ul>
        </div>
              <div>
                <ul>
                  <h5 className ="text-danger">status</h5>
                    {viewTodos.map(post =>(
                      <li key={post.id}>{post.completed? "completed" : "Not completed"}</li>
        ))}  
          </ul>
        </div>
      </div>  
    </>
    );
 }

export default Todo