//Two Impulse Challenge - Andréia Ribeiro
import React from 'react';
import './style.css';
import logo from "../images/logo.png";
import landing2 from "../images/landing2.png";
import Twitter from "../images/Twitter.png";
import Linkedin from "../images/Linkedin.png";
import FaceBook from "../images/FaceBook.png";
import Dribbble from "../images/Dribbble.png";


export default function MainPage() {

  return (
    <>

      <div className="bg-img">
        <div className="container-fluid">

          <div className="bs-example ">
            <nav className="navbar navbar-expand-md background">
              <a href="/home" className="navbar-brand">
                <img className="logo3" src={logo} height="28" alt="CoolBrand" />
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav left">

                </div>
                <div className="navbar-nav ml-auto">
                  <a href="/" className="nav-item nav-link">Home</a>
                  <a href="/" className="nav-item nav-link">Absences</a>
                  <a href="/emp" className="nav-item nav-link">Employees</a>
                  <a href="/team" className="nav-item nav-link">Team </a>

                </div>
              </div>
            </nav>
          </div>

          <h1 className="text-center text1">Make Your Team <br /> the best it can be</h1>
          <div className="text-center">
            <button className="text-center btn btn-success">Enter</button>
          </div>

        </div>
      </div> {/*close first div*/}

      <h4 className="text-center text2"> Lorem Ipsum is simply dummy text of the printing and  dummy text of the<br></br> printing and
      typesetting industry ply dummy text of.
      </h4>
      <div className="empHp">
        <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img className="landings image-fluid" src={landing2} alt="" />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <h4 className=" text3"> Augmented reality  </h4>
              <p className="p1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled
            it to make a type specimen book  </p>

              <button className="text-center btn btn-info">LEARN MORE</button>

            </div>

          </div>

        </div> {/*close second div*/}

        {/*space*/}
        <div className="space">

        </div>
      </div>
      {/*footer*/}
      <div className="bg-img1">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3 mt-5">

              <img className="" src={logo} alt="Logo" />
              <p className="simple-p1 mt-3 ml-3"> Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry.</p>
              <div className="icons">
                <a href="https://www.facebook.com/twoimpulse" target="_blank">
                  <img className="midias" src={FaceBook} alt="FaceBook" /></a>
                <a href="https://twitter.com/twoimpulse" target="_blank">
                  <img className="midias" src={Twitter} alt="Twitter" /></a>
                <a href="https://www.linkedin.com/in/andreiasalesribeiro/" target="_blank">
                  <img className="midias" src={Dribbble} alt="Dribbble" /></a>
                <a href="https://www.linkedin.com/company/two-impulse/" target="_blank">
                  <img className="midias" src={Linkedin} alt="Linkedin" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  ref">
              <p className="title">Company</p>
              <a href="#news">Team</a><br />
              <a href="#news">About Us </a><br />
              <a href="#news">Employee </a><br />
              <a href="#news">Lorem</a><br />
            </div>
            <div className="col-lg-3 col-sm-6  ref">
              <p className="title">Help</p>
              <a href="#news">Lorem</a><br />
              <a href="#news">About US </a><br />
              <a href="#news">Team </a><br />
              <a href="#news">Employee</a><br />
            </div>
            <div className="col-lg-3 col-sm-3 ref">
              <p className="title">Solutions</p>
              <a href="#news">Team</a><br />
              <a href="#news">About Us </a><br />
              <a href="#news">Employee </a><br />
              <a href="#news">Lorem</a><br />
            </div>

          </div>
          <div className="footerBorder">
            <h6 className="text-center mt-5 footer-text">@ indiapix | All rights reserved 2019</h6>
          </div>
        </div>
      </div>

    </>
  );

}
