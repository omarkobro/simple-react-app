import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  function navScroll(){
    let x = document.getElementById('navbar')
    x.classList.replace("py-4","py-3" )
    }


useEffect(()=>{
    let demo = document.getElementById("demo")
    demo.addEventListener("scroll",navScroll())
}
,[])

  return (
    <div id='demo'>
    <Nav ></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}
