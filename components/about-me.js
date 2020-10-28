const AboutMe = () => {
  return (
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>About Me</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
        </div>

        <div className="row d-flex  justify-content-center">
          <div className="col-lg-3 col-md-6 d-flex ">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
