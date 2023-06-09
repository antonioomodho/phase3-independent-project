import React from 'react';
import { NavLink } from "react-router-dom"
// import image from './images/img/petts2.png';

function Navbar(){

    return (
    //     <nav class="navbar bg-dark">
    //     <div class="container-fluid">
    //         <a class="navbar-brand text-light" href="#" >{'PET-STORE'}</a>
          
    //         <button class="btn btn-outline-info ms-1 me-4" id="searchBtn">{'Sign up'}</button>
                    
    //             <ul class="navbar-nav me-auto d-flex flex-row">
                 
    //             <li class="nav-item me-4">
    //                 {/* <a class="text-light nav-link " href="#" >DISPLAY-PETS</a> */}
    //                 <Link to="/DisplayPets">DISPLAY PETS</Link>
    //              </li>
                    
    //                 <li class="nav-item me-4">
    //                     {/* <a class="text-light nav-link" href="#" >ADD-PETS</a> */}
    //                      <Link to="/add-pets">ADD-PETS</Link>
    //                 </li>
    //                 <li class="nav-item me-4">
    //                     {/* <a class="text-light nav-link" href="#" >VIEW-SINGLE-PET</a> */}
    //                      <Link to="/display-pets">DISPLAY PETS</Link>
    //                 </li> 

                    
    //             </ul>

    //         <form class="d-flex">
    //             <input class="form-control" type="text" placeholder="search here" id="search"/>
    //             <button class="btn btn-outline-info ms-1" id="searchBtn">{'SEARCH'}</button>
    //         </form>
    //     </div>
    // </nav>
    
    
    // );
    
    <div className="container">
        
    <nav className="navbar bg-dark">
     <NavLink exact to = "/Navbar">
        <h2>PET STORE</h2>
     </NavLink>
     { <NavLink exact to = "/login">
        <h2>LOGIN</h2>
     </NavLink> }
     { <NavLink exact to = "/signup">
        <h2>SIGN UP</h2>
     </NavLink> }
     <NavLink exact to = "/addpet">
        <h2>ADD PET</h2>
     </NavLink>
     <NavLink exact to = "/pets">
        <h2>ALL PETS</h2>
     </NavLink>
     <NavLink>
     
        <button onClick={() => { window.location.href = 'http://127.0.0.1:9292/home' }}>Logout</button>
      
     </NavLink>

    </nav>

    <div className="card">
        <h1>PET FINDER</h1>
        <p>A loyal and friendly companion</p>
        <h3>Sometimes all you need is your pet.</h3>
        
    </div>
    {/* <div>
        <img src={Image} alt="" />
        </div> */}
    </div>
)

    }
    export default Navbar;