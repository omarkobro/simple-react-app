import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="container-fluid footer  pt-5">
    <div className="row">
      <div className="col-md-4 text-center text-white py-5">
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-4 text-center text-white py-5">
        <h2>AROUND THE WEB</h2>
        <ul className="list-unstyled d-flex justify-content-center align-items-center">
          <li className="m-2 d-flex justify-content-center align-items-center footerList"><i className="fa-brands fa-facebook"></i></li>
          <li className=" m-2 d-flex justify-content-center align-items-center footerList"><i className="fa-brands fa-twitter"></i></li>
          <li className=" m-2 d-flex justify-content-center align-items-center footerList"><i className="fa-brands fa-linkedin"></i></li>
          <li className="m-2 d-flex justify-content-center align-items-center footerList"><i className="fa-solid fa-globe"></i></li>
        </ul>
      </div>
      <div className="col-md-4  text-center text-white py-5 ">
        <h2>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
      </div>
      <div className="col-md-12 text-center text-white py-3 fs-5 copyright">Copyright © Your Website 2021</div>
    </div>
  </div>
  )
}
