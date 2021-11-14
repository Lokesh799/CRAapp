import axios from "axios";
import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";

  const Comment =() =>{
    const {id}= useParams();
    console.log(id)
    const [comment, setComment] = React.useState([]);

    useEffect(()=>{
      loadUser();
    },[])

      const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/posts/${id}/comments` );
        console.log(res)
        setComment(res.data)
    }

    return(
        <>

      <div className ="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className ="text-danger">postID</h5>
              {comment.map(post =>(
                <li key={post.id}>{post.postId}</li>
        ))}
          </ul>
          </div>
          <div>
          <ul>
            <h5 className ="text-danger">ID</h5>
              {comment.map(post =>(
                <li key={post.id}>{post.id}</li>
        ))}
         </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">name</h5>
              {comment.map(post =>(
                <li key={post.id}>{post.name}</li>
        ))}
         </ul>
        </div>
          </div>
        
        </>
    );
 }
export default Comment