import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section id="about">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Virtual Management Resources</h3>
            <p>
              Virtual Management Resources is here to support your unique
              business challenges - no matter what stage your business is in.
              From the sole entrepreneurial startup in need of a Virtual
              Assistant, to the established, multi-team business looking take
              their organization to the next level with an Online Business
              Manager, I provide solutions to your challenges with
              cost-effective scalability based on your specific needs.
            </p>
          </header>

          <div className="row about-cols  d-flex  justify-content-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="about-col">
                <div className="img">
                  <img src="about-1.jpg" alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-speedometer-outline"></i>
                  </div>
                </div>
                <h2 class="title">
                  <a href="#">Online Business Management</a>
                </h2>
                <p>
                  Businesses thrive when operations are streamlined. As an
                  Online Business Manager, I take care of the details so
                  established companies continue to grow. I will manage the
                  day-to-day operations and team communications
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="about-col">
                <div className="img">
                  <img src="about-2.jpg" alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline"></i>
                  </div>
                </div>
                <h2 class="title">
                  <a href="#">Virtual Assistance</a>
                </h2>
                <p>
                  Are you not quite ready to bring on a business manager?  No
                  problem, I will be your virtual assistant, taking on tasks to
                  free up your time and resources so you can do what you do best
                  – grow your business. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
