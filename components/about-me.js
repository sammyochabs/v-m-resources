const AboutMe = () => {
  return (
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>About Me</h3>
          <p className="text-left m-0">
            I am Katelyn Banman, An Online Business Manager and Virtual
            Assistant With a Bachelor of Science in Business Administration
            combined with more than 15 years of operational management and
            customer service experience. I am in a unique position to deliver a
            wide variety of services that my clients continually rely on for
            long-term business results.
          </p>
          <p className="text-left m-0">
            Over the past 15 years I have worn many hats and played key roles
            for both large corporations and small up-and-coming businesses.
            Working directly with entrepreneurs, VP’s and CEO’s, I reliably
            exceeded their expectations, which is the corner stone of what I can
            do for you.  I thrive in the fast-past environments that require
            complex multi-tasking capabilities, impressive attention to detail,
            project management capabilities, and organizational accountability.
            I also have proven technical aptitude for business systems and
            experience with multiple CRM systems, marketing systems and
            software. All these hats have allowed me to master my operational
            and administrative skills and gain an abundance of knowledge on how
            to best support and manage businesses like yours.
          </p>
          <p className="text-left m-0">
            By taking care of the details, I help you turn the vision of your
            business into a reality. Whether you are in need of a Virtual
            Assistant or an Online Business Manager, I can develop a package
            that fits your needs, budget and business goals. I can be the asset
            your team needs to get you – and our business - to the next level.
          </p>
        </div>

        <div className="row d-flex  justify-content-center">
          <div className="col-lg-3 col-md-6 d-flex ">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <img src="kate.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Katelyn Banman</h4>
                  <span>Online Business Manager</span>
                  <span>Virtual Assistant</span>

                  <div className="social">
                    {/* <a href="https://www.facebook.com/VirtualManagementResources/">
                      <i className="fa fa-twitter"></i>
                    </a> */}
                    <a href="https://www.facebook.com/VirtualManagementResources/">
                      <i className="fab fa-facebook"></i>
                    </a>
                    {/* <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a> */}
                    <a href="https://www.linkedin.com/in/katelyn-banman-b3ba1b7/">
                      <i className="fab fa-linkedin"></i>
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
