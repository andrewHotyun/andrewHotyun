import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import {UserList} from "./components/UserList/UserList"

import { UserContext } from "./components/UserContext"

function App() {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([])

  return (
    <div className="App">
      <UserContext.Provider value={{users, setUsers, displayedUsers, setDisplayedUsers}}>
        <Navbar />
        <UserList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
