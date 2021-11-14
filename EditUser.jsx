import React, { useEffect, useState } from "react";
import { useHistory , useParams} from "react-router-dom";
import axios from "axios";

const EditUser =() =>{
  const history=useHistory();
    const {id}= useParams();
      const[user , setUser] = useState({
        userId:"",
        username:"",
        email:""
        
    });
    const{ userId, username, email }=user;
      const handle = e => {
        setUser({...user,[e.target.name]: e.target.value});
      };

      const Submit= async(e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:3008/users/${id}` ,user);
        history.push('/User');
      
      };
      useEffect(() => {
        axios.get(`http://localhost:3008/users/${id}`).then((response) => {
          console.log(response)
            setUser(response.data);
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