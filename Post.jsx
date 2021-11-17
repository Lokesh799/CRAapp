import axios from "axios";
import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { viewPost } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Post (props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.viewPosts.viewPost);  
  
  const {id}=useParams(); 

    useEffect(()=>{
      loadUser();
    },[]);

      const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/users/${id}/posts`);
        console.log(res)
        const postAction= viewPost(res.data)
        dispatch(postAction);
    }
  
    return(
        <>
      <div className ="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className ="text-danger">UserID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.userId}</li>
        ))}
          </ul>
          </div>
          <div>
          <ul>
            <h5 className ="text-danger">ID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.id}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">Title</h5>
              {post.map(post =>(
                <li key={post.id}>{post.title}<Link className="btn btn-primary" to={`/Comment/${post.id}`}>Viewcomment</Link></li>          
        ))}
          </ul>
        </div>
      </div>  
        </>
    );
 }


export default Post