import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import img1 from "../Images/poert1.png"
import img2 from "../Images/port2.png"
import img3 from "../Images/port3.png"
export default function Portfolio() {
    function changeLayout(){
        let imgContainer = document.querySelectorAll(".imgContainer");
        imgContainer.forEach((el)=>{
          el.addEventListener("click", ()=>{

            let ch = el.firstElementChild.getAttribute("src");
            console.log(ch);
              document.getElementById("boxContainer").style.display = "flex"
              document.getElementById("layoutImg").setAttribute("src", ch)
          })
        })
    }
    function closeFunction(){
      document.getElementById("boxContainer").addEventListener("click", function(e){
        if(e.target === document.getElementById("boxContainer")){
          document.getElementById("boxContainer").style.display = "none"
        }
    })
    }
    useEffect(() => {
      changeLayout()
      closeFunction()
    }, [])
  return (
    <>
    <div className="portfolio text-center mt-3 ">
    <div id="boxContainer">
        <div id="innerBox" className="innerBox d-flex p-2 justify-content-between align-items-center position-relative">
          <img id='layoutImg' src={img2} className='w-75 mx-auto' alt="" />
        </div>
    </div>
        <div className="container">
          <h2 className='fs-1 fw-bold' style={{ color: '#2c3e50'}}>PORTFOlIO COMPNENT</h2>
          <div className="star d-flex justify-content-between align-items-center mx-auto  mt-3 ">
            <div className="blackLine text-white"></div>
            <i class="fa-solid fa-star" style={{ color: '#2c3e50'}}></i>
            <div className="blackLine"></div>
          </div>
          <div className="row g-5 my-3">
              <div className="col-md-4 ">
                <div id='imgContainer'  className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img id='img' className='w-100 img'  src={img1} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                <div className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img className='w-100 img' src={img2} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                <div className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img className='w-100 img' src={img3} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                <div className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img className='w-100 img' src={img1} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                <div className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img className='w-100 img' src={img2} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                <div className="imgContainer position-relative overflow-hidden  " style={{ borderRadius: '10px', cursor: "pointer"}}>
                  <img className='w-100 img' src={img3} alt=""  />
                  <div className='layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white '>
                  <i className="fa-solid fa-plus" style={{ fontSize: '80px'}}></i>
                  </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
