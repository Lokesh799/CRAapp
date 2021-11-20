import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addUser } from "../actions";
import { useSelector, useDispatch } from 'react-redux';
import { addUserRequest } from "../thunks/add";


function Add (props) {
  const dispatch = useDispatch();
  const addUsers = useSelector((state) => state.addUsers.adduser);

  let history= useHistory();

    const{ id, username, email }=addUsers;
      const handle = e => {
        dispatch (addUser({...addUsers,[e.target.name]: e.target.value}));
      };

      const onSubmit= async(e)=>   {
        e.preventDefault();
        dispatch(addUserRequest(addUsers))
        history.push('/User');
      };
  
    return(
        <div className="wrapper">
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="form-group">
            <label>Enter ID</label>
              <input onChange={(e)=>handle(e)} id="id" value={id} type="text" name="id" className="form-control" />
              </div>
                  <div className="form-group">
                    <label>username</label>
                    <input onChange={(e)=>handle(e)} id="id" value={username}  type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Enter Email</label>
                    <input onChange={(e)=>handle(e)} id="id" value={email} type="text" name="email" className="form-control" />
                  </div>
                <div className="form-group">
                  <input type="submit"  onSubmit={(e)=>onSubmit()} className="btn btn-success btn-block" />
                </div>
        </form>
      </div>
    );
    
}

export default Add;