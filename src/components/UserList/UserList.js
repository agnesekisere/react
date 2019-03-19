import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const Users=[
    {
        image: (logo),
        name: "Pēteris",
    },
    {
        image: (logo),
        name: "Jānis",
    },
    {
        image: (logo),
        name: "Juris",
    },
    {
        image: (logo),
        name: "Anna",
    },
    {
        image: (logo),
        name: "Madara",
    },
];

class UserList extends Component{
    render(){
        return(
            Users.map(User =>{
                return <UserCard image={User.image} name={User.name} />
            })
        )
    }
}

export default UserList;