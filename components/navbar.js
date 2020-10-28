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
                <a href="index.html">Virtual Management Resourses</a>
              </h1>

              <a href="index.html" className="logo mr-auto">
                <img src="assets/img/logo.png" alt="" className="img-fluid" />
              </a>

              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li className="drop-down">
                    <a href="">Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 5</a>
                      </li>
                    </ul>
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
