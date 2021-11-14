
import axios from "axios";
import React, { useEffect, } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [post, setPost] = React.useState([]);

    useEffect(() => {
      axios.get("http://localhost:3008/users").then((response) => {
        console.log(response)
        setPost(response.data);
        setPost(response.data.reverse())
    });
  }, []);

  if (!post) return null;

    return (
      <>
        <div>
        <table className="table">
      <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">User</th>
        <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
          post.map(post =>(
        <tr>
          <td key={post.id}>{post.id}</td>
          <td >{post.username}</td>
          <td >{post.email}</td>
          <td>
        <Link className="btn btn-primary" to={`/Post/${post.id}`}>ViewPost</Link>
        <Link className="btn btn-primary" to={`/Todo/${post.id}`}>ViewTodo</Link>
        <Link className="btn btn-primary" to={`/EditUser/${post.id}`}>Edit</Link>
      </td>
      </tr>
      ))}
  </tbody>
</table>
 </div>
 </>
  );
}
