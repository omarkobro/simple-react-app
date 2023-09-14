import React from 'react'
import "./About.css"


export default function About() {
  return (
    <>
    <div className="about text-white text-center">
        <div className="container">
        <h2  className='fs-1 fw-bold'>ABOUT COMPONENT</h2>
      <div className="star d-flex justify-content-between align-items-center mx-auto  mt-3">
      <div className="whiteLine "></div>
      <i class="fa-solid fa-star"></i>
      <div className="whiteLine"></div>
    </div>
    <div className="row my-3">
      <div className="col-md-6 ">
        <p className="text-start aboutP" >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6 ">
      <p className="text-start aboutP">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
        </div>
    </div>
    </>
  )
}
