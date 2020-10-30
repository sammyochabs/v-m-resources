import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Navbar(props) {
  return (
    <div>
      <header id="header" className="fixed-top header-transparent">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-11 d-flex align-items-center">
              <h1 className="logo mr-auto">
                <a href="index.html">Virtual Management Resources</a>
              </h1>

              <a href="index.html" className="logo mr-auto">
                <img src="assets/img/logo.png" alt="" className="img-fluid" />
              </a>

              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active">
                    <a href="#intro">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>

                  <li>
                    <a href="#team">About Me</a>
                  </li>

                  <li>
                    <a href="#faq">F.A.Q</a>
                  </li>

                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
