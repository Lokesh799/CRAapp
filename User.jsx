
//import axios from "axios";
import React, { useEffect, } from "react";
import { Link } from "react-router-dom";
//import { getUser } from "../actions";
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from "../thunks/users";


export default function User (props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);

    useEffect(() => {
    //   axios.get("http://localhost:3008/users").then((response) => {
    //    console.log(response)
    //    const getUserAction = getUser(response.data);
    //     dispatch(getUserAction);
    //     console.log(users)
    //     setPost(response.data.reverse())
    // });
    dispatch(getUsers());

  }, []);

  //if (!users) return "Loading...";

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
          users.map(user =>(
        <tr>
          <td key={user.id}>{user.id}</td>
          <td >{user.username}</td>
          <td >{user.email}</td>
          <td>
        <Link className="btn btn-primary" to={`/Post/${user.id}`}>ViewPost</Link> 
        <Link className="btn btn-primary"  to={`/Todo/${user.id}`}>ViewTodo</Link>
        <Link className="btn btn-primary" to={`/EditUser/${user.id}`}>Edit</Link>
      </td>
      </tr>
      ))}
  </tbody>
</table>
 </div>
 </>
  );
}
