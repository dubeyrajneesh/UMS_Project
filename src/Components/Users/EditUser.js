import React from 'react' ;
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button } from 'bootstrap'
import axios from 'axios'
import { useNavigate , useParams } from 'react-router-dom'




const EditUser = () => {
    const {UserId} = useParams() ;
   // alert(UserId) ;

   const navigate = useNavigate() ; 
const initialState = {name:"" , username:"" , email:"" , phone:"" , website:""};
const[user, setUser] =  useState(initialState) ;

const{name , username, phone,email,website} = user;

const onChangeInput = event => {
    // console.log(event);
    // console.log(event.target.name) ;
    // console.log(event.target.value) ;

    setUser({...user ,[event.target.name]: event.target.value});

    }

    useEffect(() => {
        fetchUser() ;
    }, []);

    const fetchUser = async() =>{

        const response = await axios.get(`http://localhost:5000/users/${UserId}`);
       // console.log(response) ;
        setUser(response.data) ;
    }

    
    const onFormSubmit= async(event) =>{
        event.preventDefault() ;
        if(!user.name){
            alert("Name part can't be empty")
            return ;
        }

        if(!user.username){
            alert("username part can't be empty")
            return ;
        }

        if(!user.email){
            alert("email part can't be empty")
            return ;
        }

        if(!user.phone){
            alert("phone part can't be empty")
            return ;
        }

        if(!user.website){
            alert("website part can't be empty")
            return ;
        }
          
        await axios.put(`http://localhost:5000/users/${UserId}` , user) ;
        navigate({pathname: '/'}) ;
    

}
    return (
        <div className="container">
            <div className=" mx-auto w-75">
                <h2 className="text-center py-2"> Edit Users Details</h2>
                <form onSubmit={(event)=> onFormSubmit(event)}>

                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            name="name"
                            value={name}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone-number"
                            name="phone"
                            value={phone}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Username"
                            name="username"
                            value={username}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <input
                            className="form-control form-control-lg"
                            placeholder="Enter your Website"
                            name="website"
                            value={website}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button submit" >Update</button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditUser
