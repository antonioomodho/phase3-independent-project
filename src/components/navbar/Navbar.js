import React from 'react';

function Navbar(){

    return (
        <nav class="navbar bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#" >{'PET-STORE'}</a>
            <button class="btn btn-outline-info ms-1 me-4" id="searchBtn">{'Sign up'}</button>
                    
                <ul class="navbar-nav me-auto d-flex flex-row">

                    <li class="nav-item me-4">
                        <a class="text-light nav-link " href="#" >DISPLAY-PETS</a>
                    </li>
                    
                    <li class="nav-item me-4">
                        <a class="text-light nav-link" href="#" >ADD-PETS</a>
                    </li>
                    <li class="nav-item me-4">
                        <a class="text-light nav-link" href="#" >VIEW-SINGLE-PET</a>
                    </li>
                </ul>

            <form class="d-flex">
                <input class="form-control" type="text" placeholder="search here" id="search"/>
                <button class="btn btn-outline-info ms-1" id="searchBtn">{'SEARCH'}</button>
            </form>
        </div>
    </nav>
    
    
    );
    
    }
    export default Navbar;