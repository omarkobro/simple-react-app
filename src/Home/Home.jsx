import React from 'react'
import "./Home.css"
import img from "../Images/avataaars.svg"
export default function Home() {

  return (
    <>
    <div className="homePage text-white pt-5">
        <div className="container">
        <img className="w-100 homeImg my-5" src={img} alt="" />
    <h1>START FRAMEWORK</h1>
    <div className="star d-flex justify-content-between align-items-center mx-auto ">
      <div className="whiteLine "></div>
      <i className="fa-solid fa-star"></i>
      <div className="whiteLine"></div>
    </div>
    <div className="mt-3">Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  )
}
