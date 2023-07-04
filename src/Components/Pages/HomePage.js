import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Table, Button , Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function HomePage() {

  const [ users , setUsers] = useState([]) ;
  const [loading , setLoading] = useState(true) ;
  useEffect(()=>{
    //  getAllUsers() ;
   getAllUsersWithAwait() ;


  },[]);

  const getAllUsersWithAwait = async() =>{
    const result = await axios.get("http://localhost:5000/users") ;
    console.log(result) ;
    setUsers(result.data);
    setLoading(false) ;
    console.log("after axios call") ;
  }
  const deleteuser = async(UserId) =>{
    await axios.delete(`http://localhost:5000/users/${UserId}`);
    getAllUsersWithAwait() ;
  }
  const getAllUsers = () =>{
   
    axios.get("http://localhost:5000/users")
    .then( function(response){
      console.log(response) ;
      setUsers(response.data);
    })
    .catch(function(error){
      console.log(error) ;
    }) ;

    console.log("after axios api call") ;

  }
  return (
    <div className= "container">
      { loading ? <spinner animation= "grow"/>:
      <div>
     <h2 className= "m-2 p-2">User Management System</h2> 

     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          users.map((user,index)=>{
            
            return <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Link to={`/Viewuser/View/${user.id}`} class="btn btn-primary me-2">View</Link>
              <Link to={`/EditUser/Edit/${user.id}`} class="btn btn-warning me-2">Edit</Link>
              <Button onClick={() =>deleteuser(user.id)} variant="danger">Delete</Button>
             
            </td>
            
          </tr>
          })
        }
       
       
      </tbody>
    </Table>
    </div>}

     
    </div>
  )
}

export default HomePage ;
