import React, { useState,useContext} from 'react'
import UserContext from '../context/UseContext';

function LogIn() {
    const [userName,setUserName]= useState('');
    const [password,setPassword]= useState('');

    const {setUser}= useContext(UserContext);

    const handleSubmit=(e)=>{
         e.preventDefault();
         setUser({userName,password})
    }

  return (
    <div>
       <h2>LogIn Page</h2>
       <input type="text" 
       value={userName}
       placeholder='username'
       onChange={(e)=>setUserName(e.target.value)}
       />
         {"     "}
       <input type="text" 
       value={password}
       placeholder='password'
       onChange={(e)=>setPassword(e.target.value)}
       />
       {"  "}
       <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default LogIn
