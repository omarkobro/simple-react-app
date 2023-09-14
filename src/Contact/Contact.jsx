import React, { useEffect, useState } from 'react'
import "./Contact.css"

export default function Contact() {
  // let nameLabel = document.getElementById("nameLabel");
  // let ageLabel = document.getElementById("ageLabel");
  // let emailLabel = document.getElementById("emailLabel");
  // let passwordLabel = document.getElementById("passwordLabel");
  // let userName = document.getElementById("userName");
  // let userAge = document.getElementById("userAge");
  // let userEmail = document.getElementById("userEmail");
  // let userPassword = document.getElementById("userPassword");


  // function showLabel(){
  //   if(userName.value !== ""){
  //     nameLabel.style.top = "0"
  //     nameLabel.style.display = "block"
  //   }
  //   else if(userName.value === ""){
  //     nameLabel.style.top = "60px"
  //     nameLabel.style.display = "none"

  //   }
  //   if(userAge.value !== ""){
  //     ageLabel.style.top = "0"
  //     ageLabel.style.display = "block"
  //   }
  //   else if(userAge.value === ""){
  //     ageLabel.style.top = "60px"
  //     ageLabel.style.display = "none"

  //   }
  //   if(userEmail.value !== ""){
  //     emailLabel.style.top = "0"
  //     emailLabel.style.display = "block"

  //   }
  //   else if(userEmail.value === ""){
  //     emailLabel.style.top = "60px"
  //     emailLabel.style.display = "none"

  //   }

  //   if(userPassword.value !== ""){
  //     passwordLabel.style.top = "0"
  //     passwordLabel.style.display = "block"

  //   }
  //   else if(userPassword.value === ""){
  //     passwordLabel.style.top = "60px"
  //     passwordLabel.style.display = "none"
  //   }
  // }

  // useEffect(()=>{
  //   showLabel()
  // },[])

  return (
    <>
    <div className="contact text-center">
        <div className="container">
        <h2 className='fs-1 fw-bold mt-3' style={{ color: '#2c3e50'}}>CONTACT SECTION</h2>
      <div className="star d-flex justify-content-between align-items-center mx-auto  mt-3 ">
      <div className="blackLine text-white"></div>
      <i class="fa-solid fa-star" style={{ color: '#2c3e50'}}></i>
      <div className="blackLine"></div>
      </div>
      <form className="form-control mt-5 w-50 mx-auto text-start">
        <label  id='nameLabel' htmlFor="userName">userName</label>
        <input  id='userName' type="text" placeholder='userName' className="form-control bg-transparent mb-4" />
        <label id='ageLabel' htmlFor="userAge">userAge</label>
        <input   id='userAge' type="text" placeholder='userAge' className="form-control bg-transparent mb-4" />
        <label id='emailLabel' htmlFor="userEmail">userEmail</label>
        <input   id='userEmail' type="email" placeholder='userEmail' className="form-control bg-transparent mb-4" />
        <label id='passwordLabel' className="" htmlFor="userPassword">userPassword</label>
        <input  id='userPassword' type="password" placeholder='userPassword' className="form-control bg-transparent mb-4" />
        <button type='button' style={{ backgroundColor: '#1abc9c'}} className= "btn text-white d-block ">Send Message</button>
      </form>
    </div>
    </div>
    </>
  )
}
