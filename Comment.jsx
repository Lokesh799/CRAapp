import axios from "axios";
import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";
import { viewComment } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Comment (props) {
  const dispatch = useDispatch();
  const viewComm = useSelector((state) => state.viewComments.viewComment);  
  
  const {id}=useParams(); 

    useEffect(()=>{
      loadUser();
    },[])

      const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/posts/${id}/comments` );
        console.log(res)
         const commentAction= viewComment(res.data)
         dispatch(commentAction)
    }

    return(
        <>

      <div className ="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className ="text-danger">postID</h5>
              {viewComm.map(post =>(
                <li key={post.id}>{post.postId}</li>
        ))}
          </ul>
          </div>
          <div>
          <ul>
            <h5 className ="text-danger">ID</h5>
              {viewComm.map(post =>(
                <li key={post.id}>{post.id}</li>
        ))}
         </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">name</h5>
              {viewComm.map(post =>(
                <li key={post.id}>{post.name}</li>
        ))}
         </ul>
        </div>
          </div>
        
        </>
    );
 }
export default Comment