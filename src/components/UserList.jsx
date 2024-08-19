import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios';

const UserList = () => {
      const [users, setusers] = useState([]);
      useEffect(() => {
         axios
           .get("https://jsonplaceholder.typicode.com/users")
           .then((response) => setusers(response.data))
           .catch((error) => console.log(Error));

        /*fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setusers(data))
     .catch(error => console.error('Error:', error));*/
        /* return () => {
      second
    }*/
      }, []);
     console.log(users);
  return (
    <div>
      {users.map((user, key) => (
        <UserCard user={user} key={user.id}/>
      ))}
    </div>
  );
}

export default UserList