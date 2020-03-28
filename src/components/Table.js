import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
//import Button from "./Button.js"
import { UserContext } from './UserContext.js';

//Check out 20-State/03-Stu_useState
function Table() {
    // https://randomuser.me/documentation#howto
    // exists in case I ever built functionality in to change the url, which would get a new set of employees. Currently not being used other than to store the url.
    const [url] = useState('https://api.randomuser.me/?results=30')
    // custom hook used for getting the employees from the api and storing the sort functions
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedUsers} = useContext(UserContext)
    return (


        <table>
            <thead>
                <tr>
                    <td>Photo</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                    <td>Phone</td>
                    <td>City</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {displayedUsers.map(user => {
                    return (
                        //<div className="user-item-container">
                        <tr>

                            <td><img className="picContainer" src={user.picture.thumbnail || ""}/></td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.login.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.city}</td>
                            <td>{user.dob.age}</td>
                            <td>{user.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;