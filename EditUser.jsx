import React, { useEffect, useState } from "react";
import { useHistory , useParams} from "react-router-dom";
import axios from "axios";
import { editUser } from "../actions";
import { useSelector, useDispatch } from 'react-redux';


function EditUser (props) {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editUsers.editUser);

  let history= useHistory();
  const {id}=useParams();


    const{ userId, username, email }=edit
      const handle = e => {
      const editAction= editUser({...edit,[e.target.name]: e.target.value});
      dispatch(editAction);
    };

      const Submit= async(e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:3008/users/${id}` ,edit);
        history.push('/User');
      
      };
      useEffect(() => {
        axios.get(`http://localhost:3008/users/${id}`).then((response) => {
          console.log(response)
         const getAction= editUser(response.data);
         dispatch(getAction);
      });
    }, []);

    return(
        <div className="wrapper">
        <form onSubmit={(e)=>Submit(e)}>
          <div className="form-group">
            <label>Enter ID</label>
              <input onChange={(e)=>handle(e)}  value={id} type="text" name="userId" className="form-control" />
              </div>
                  <div className="form-group">
                    <label>username</label>
                    <input onChange={(e)=>handle(e)}  value={username}  type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Enter Email</label>
                    <input onChange={(e)=>handle(e)}  value={email} type="text" name="email" className="form-control" />
                  </div>
                <div className="form-group">
                  <input type="submit"  onSubmit={()=>Submit()} className="btn btn-success btn-block" />
                </div>
        </form>
      </div>  
    );
    
}
export default EditUser;