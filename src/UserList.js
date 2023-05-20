import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './App.css';
import { Card } from "@mui/material";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors

  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      setListOfUser(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  },[])
 
  return(
    <div className="App" >
        <Card variant="outlined" className="card">
        <ul>
      {listOfUser.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
        </Card>
    
  </div>
  )
 
};

export default UserList;
