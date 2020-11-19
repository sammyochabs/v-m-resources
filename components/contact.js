const Contact = () => {
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Contact Us</h3>
          <p>
            <div className="text-center mb-5  mt-5">
              <a href="https://WorkwithVMR.as.me/" target="_blank">
                <button
                  style={{
                    background: "#18d26e",
                    border: 0,
                    padding: "10px 30px",
                    color: "#fff",
                    transition: "0.4s",
                    cursor: "pointer",
                  }}
                  className=""
                >
                  SCHEDULE A TIME TO CHAT
                </button>
              </a>
            </div>
          </p>
        </div>
        <hr className="my-5" />

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Denver, CO</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:(303) 519-8232"> (303) 519-8232</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:VirtualMgmtResources@gmail.com">
                  {" "}
                  VirtualMgmtResources@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
