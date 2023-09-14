import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

export default function Nav() {
    // let container = document.getElementById("container")
    // let nav = document.querySelector(".navbar")

//     function navScroll(){
//     let x = document.getElementById('navbar')
//     x.classList.replace("py-4","py-3" )
//     }


// useEffect(()=>{
//     navScroll()
// }
// ,[])


return (
    <>
    
    <nav id='navbar' className="navbar navbar-expand-lg navbar-light py-4 ">
        <div  id='container' className="container">
            <NavLink className="navbar-brand text-white h1 fs-2 fw-bold" to="#">START FRAMEWORK</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className={(x)=>x.isActive? "nav-link isActive":"nav-link"} aria-current="page" to="about">ABOUT</NavLink>
            </li>
        <li className="nav-item">
        <NavLink className={(x)=>x.isActive? "nav-link isActive":"nav-link"} aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={(x)=>x.isActive? "nav-link isActive":"nav-link"} aria-current="page" to="contact">CONTACT</NavLink>
        </li>   
    </ul>
    </div>
</div>
</nav>
    </>
)
}
