import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Table from "./components/Table"

import { UserContext } from "./components/UserContext"

function App() {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([])

  return (
    <div className="App">
      <UserContext.Provider value={{users, setUsers, displayedUsers, setDisplayedUsers}}>
        <Navbar />
        <Table />
      </UserContext.Provider>
    </div>
  );
}

export default App;
