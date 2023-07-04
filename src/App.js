// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/ContactPage';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import PageNotFound from './Components/Pages/PageNotFound';
import Adduser from './Components/Users/Adduser';
import EditUser from './Components/Users/EditUser';
import Viewuser from './Components/Users/Viewuser';




function App() {
  return (
    <Router>
    <div>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/About" element={<AboutPage/>} />
        <Route exact path="/Contact" element={<ContactPage/>} />
        <Route exact path="/Adduser/Add" element={<Adduser/>} />
        <Route exact path="/EditUser/Edit/:UserId" element={<EditUser/>} />
        <Route exact path="/Viewuser/View/:UserId" element={<Viewuser/>} />
        <Route path="*" element = {<PageNotFound/>} />
        </Routes>
     

      
    </div>
    </Router>
  );
}

export default App;
 