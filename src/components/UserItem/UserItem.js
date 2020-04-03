import React, { Component} from 'react';
import './UserItem.css';

export default class UserItem extends Component {
    // static propTypes = {
    //   first: PropTypes.string.isRequired,
    //   last: PropTypes.string.isRequired,
    //   title: PropTypes.string.isRequired,
    //   thumbnail: PropTypes.string
    // };

    render() {
        const {firstName, lastName, username, phone, location, title, age, thumbnail} = this.props;
        const row = [firstName, lastName, username, phone, location, age, title];
        return (
            /*<table>*/
            /*    <thead>*/
            /*    <tr>*/
            /*        <td>Photo</td>*/
            /*        <td>First Name</td>*/
            /*        <td>Last Name</td>*
            /*        <td>Username</td>*/
            /*        <td>Phone</td>*/
            /*        <td>City</td>*/
            /*        <td>Age</td>*/
            /*    </tr>*/
            /*    </thead>*/
            /*    <tbody>*/
                <div className="user-item-container">
                    <img className="picContainer" src={thumbnail || ""}/>
                    <div style={{display: "flex"}}>
                        {row.map((word) => <div className="user-item-cell">{word}</div>)}
                    </div>
                </div>
            //     </tbody>a
            // </table>
        );
    }
}


