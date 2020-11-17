import React, { useEffect, useState } from "react";

export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: "url(intro-1.jpg)",
                }}
              >
                <div className="carousel-container my-5">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Virtual Management Resources
                    </h2>
                    <p class="animate__animated animate__fadeInUp mt-5">
                      Virtual Management Resources is here to support your
                      unique business challenges - no matter what stage your
                      business is in.
                    </p>
                    <a
                      href="#contact"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(intro-2.jpg)",
                }}
              >
                <div className="carousel-container  mt-5">
                  <div className="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Online Business Manager
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Businesses thrive when operations are streamlined.&nbsp;As
                      an Online Business Manager, I take care of the details so
                      established companies continue to grow.
                    </p>
                    <a
                      href="#contact"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/intro-carousel/3.jpg)",
                }}
              >
                <div className="carousel-container  mt-5">
                  <div className="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Virtual Assistant
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Are you not quite ready to bring on a Business
                      Manager?&nbsp; No problem, I will be your virtual
                      assistant, taking on tasks to free up your time and
                      resources so you can do what you do best &ndash; grow your
                      business.
                    </p>
                    <a
                      href="#contact"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(intro-4.jpg)",
                }}
              >
                <div className="carousel-container  mt-5">
                  <div className="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Professional And Experienced
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Bringing me on as a Virtual Assistant or Online Business
                      Manager will give you access to a professional,
                      experienced team member.
                    </p>
                    <a
                      href="#contact"
                      className="btn-get-started  bg-success scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(desk.jpg)",
                }}
              >
                <div className="carousel-container  mt-5">
                  <div className="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      I Am Always Available
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Whether you are in need of a Virtual Assistant or an
                      Online Business Manager, I can develop a package that fits
                      your needs, budget and business goals.
                    </p>
                    <a
                      href="#contact"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
