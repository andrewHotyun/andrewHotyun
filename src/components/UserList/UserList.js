import React, { Component } from 'react';
import "../Table.css"
import {getRandomUsers} from "../../Users";
import UserItem from "../UserItem/UserItem";



//Check out 20-State/03-Stu_useState
export class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {fetching: true};
    }

    componentWillMount() {
        //request random users
        //set state to fetching
        getRandomUsers(10)
            .then(data => {
                console.log("request " + data);
                this.setState({
                    users: data,
                    fetching: false
                });
            });
    }

    renderUserItems() {

            return this.state.users.map((user, index) => {


            const last = user.name.first;
            const first = user.name.last;
            const username = user.login.username;
            const phone = user.phone;
            const location = user.location.city;
            const thumbnail = user.picture.thumbnail;
            const age = user.dob.age;
            return (
                <UserItem

                    key={first + last + username + phone + location + thumbnail + index}
                    //title={user.name.title}
                    firstName={first}
                    lastName={last}
                    username={username}
                    phone={phone}
                    location={location}
                    thumbnail={thumbnail}
                    age={age}
                />

            );

        });
    }


    render() {
        if (this.state.fetching) {
            //show loader
            return (
                <div>
                    <img src='../../../img/loading.gif'/>
                </div>

            );
        }

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
            <div className="header">
                <h2></h2>
                <ul>
                    {this.renderUserItems()}
                </ul>
            </div></tbody></table>
        );

    }

}
