import axios from "axios";
import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";

  const Todo =() =>{
    const {id}= useParams();
    console.log(id)
    const [todo, setTodo] = React.useState([]);

    useEffect(()=>{
      loadUser();
    },[])

      const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/users/${id}/todos` );
        console.log(res)
        setTodo(res.data)
    }

    return(
        <>
          <div className ="d-flex flex-row bd-highlight mb-3">
            <div>
              <ul>
                <h5 className ="text-danger">UserID</h5>
                {todo.map(post =>(
                  <li key={post.id}>{post.userId}</li>
        ))}
          </ul>
          </div>
              <div>
                <ul>
                  <h5 className ="text-danger">ID</h5>
                    {todo.map(post =>(
                      <li key={post.id}>{post.id}</li>
        ))}
          </ul>
        </div>
              <div>
                <ul>
                  <h5 className ="text-danger">status</h5>
                    {todo.map(post =>(
                      <li key={post.id}>{post.completed? "completed" : "Not completed"}</li>
        ))}  
          </ul>
        </div>
      </div>  
    </>
    );
 }


export default Todo