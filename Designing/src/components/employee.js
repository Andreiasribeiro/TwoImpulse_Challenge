//Two Impulse Challenge - Andréia Ribeiro
import React from 'react';
import './style.css';
import logo from "../images/logo.png";
import el1 from "../images/el1.png";
import el2 from "../images/el2.png";
import Twitter from "../images/Twitter.png";
import Linkedin from "../images/Linkedin.png";
import FaceBook from "../images/FaceBook.png";
import Dribbble from "../images/Dribbble.png";


export default function Employee() {

    return (
        <>
            <div class="bs-example ">
                <nav class="navbar navbar-expand-md background">
                    <a href="/home" class="navbar-brand">
                        <img className="logo3" src={logo} height="28" alt="Logo" />
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav left">

                        </div>
                        <div class="navbar-nav ml-auto">
                            <a href="/" class="nav-item nav-link">Home</a>
                            <a href="/" class="nav-item nav-link">Absences</a>
                            <a href="/emp" class="nav-item nav-link">Employees</a>
                            <a href="/team" class="nav-item nav-link">Team</a>
                            <a href="https://www.linkedin.com/in/andreiasalesribeiro/" target="_blank">
                                <button className="btn btn-default" >New Employee</button></a>

                        </div>
                    </div>
                </nav>
            </div> {/*close first div*/}
            <div className="empBg">
                <div className="container text-center ">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight ">
                            <img className="el3" src={el1} height="28" alt="CoolBrand" />

                        </div>
                        <div class="p-2 bd-highlight">
                            <p className="emp-p1">New Employee</p>
                        </div>
                        <div class="p-2 bd-highlight">
                            <img className="el4" src={el2} height="26" alt="CoolBrand" />
                        </div>
                    </div>
                </div> {/*close second div*/}


                <div className="container">
                    <div class="row justify-content-center mt-5">
                        <div class="col-md-9">
                            <form class="text-center border border-light p-5" action="#!">

                                <input type="text" class="form-control mb-4" name="Employee" placeholder="Employee ID" />
                                <input type="text" class="form-control mb-4" name="Name" placeholder="Name" />
                                <input type="text" class="form-control mb-4" name="Birthday" placeholder="Birthday" />
                                <input type="text" class="form-control mb-4" name="Address" placeholder="Address" />
                                <input type="text" class="form-control mb-4" name="Status" placeholder="Status" />
                                <input type="text" class="form-control mb-4" name="Position" placeholder="Position" />
                                <input type="text" class="form-control mb-4" name="Created" placeholder="Created" />
                                <input type="text" class="form-control mb-4" name="Updated" placeholder="Updated" />
                                <button className="btn btn-info"> Submit </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>{/*close third div*/}


            {/*footer*/}
            <div class="bg-img2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-sm-3 mt-5">

                            <img className="" src={logo} alt="Logo" />
                            <p className="simple-p1 mt-3 ml-3"> Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's </p>

                            <div class="icons">
                                <a href="https://www.facebook.com/twoimpulse" target="_blank">
                                    <img className="midias" src={FaceBook} alt="FaceBook" /></a>
                                <a href="https://twitter.com/twoimpulse" target="_blank">
                                    <img className="midias" src={Twitter} alt="Twitter" /></a>
                                <a href= "https://www.linkedin.com/in/andreiasalesribeiro/" target="_blank">
                                    <img className="midias" src={Dribbble} alt="Dribbble" /></a>
                                <a href="https://www.linkedin.com/company/two-impulse/" target="_blank">
                                    <img className="midias" src={Linkedin} alt="Linkedin" /></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6  ref">
                            <p class="title">Company</p>
                            <a href="#news">Team</a><br />
                            <a href="#news">About Us </a><br />
                            <a href="#news">Employee </a><br />
                            <a href="#news">Lorem</a><br />
                        </div>
                        <div className="col-lg-3 col-sm-6  ref">
                            <p class="title">Help</p>
                            <a href="#news">Lorem</a><br />
                            <a href="#news">About US </a><br />
                            <a href="#news">Team </a><br />
                            <a href="#news">Employee</a><br />
                        </div>
                        <div className="col-lg-3 col-sm-3 ref">
                            <p class="title">Solutions</p>
                            <a href="#news">Team</a><br />
                            <a href="#news">About Us </a><br />
                            <a href="#news">Employee </a><br />
                            <a href="#news">Lorem</a><br />
                        </div>

                    </div>
                    <div class="footerBorder">
                        <h6 className="text-center mt-5 footer-text">@ indiapix | All rights reserved 2019</h6>
                    </div>
                </div>
            </div> {/*close fourth div*/}

        </>
    );

}
