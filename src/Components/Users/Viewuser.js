import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Viewuser = () => {


    const { UserId } = useParams();
    const initialState = { name: "", username: "", email: "", phone: "", website: "" };
    const [user, setUser] = useState(initialState);
    const[address , setAddress] = useState({}) ;
    const [company , setCompany] = useState({}) ;

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {

        const response = await axios.get(`http://localhost:5000/users/${UserId}`);
        // console.log(response) ;
        setUser(response.data);
        setAddress(response.data.address)
        setCompany(response.data.company)
        
    }
    return (
        <div className="container">

            <Link to = '/' className = " btn btn-outline-info mt-2">Back</Link>
            <p className = " display-2"> User Id {user.id}</p>


            <ListGroup variant="flush" classNamr=" p-4 w- 75">
                {/* <ListGroup.Item>{user.id}</ListGroup.Item> */}
                <ListGroup.Item>Full Name : {user.name}</ListGroup.Item>
                <ListGroup.Item> Email : {user.email}</ListGroup.Item>
                <ListGroup.Item> Phone : {user.phone}</ListGroup.Item>
                <ListGroup.Item> Website : {user.website}</ListGroup.Item>
                <ListGroup.Item> Address : {address.street} | {address.city}</ListGroup.Item>
                <ListGroup.Item> Company Name : {company.name}</ListGroup.Item>

            </ListGroup>
        </div>
    )
}

export default Viewuser
