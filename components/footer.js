const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row   d-flex  justify-content-between">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Virtual Management Resources</h3>
              <p>
                Virtual Management Resources is here to support your unique
                business challenges - no matter what stage your business is in.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#intro">Home</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                {/* <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Denver, CO <br />
                United States <br />
                <strong>Phone:</strong> (303) 519-8232
                <br />
                <strong>Email:</strong> VirtualMgmtResources@gmail.com
                <br />
              </p>

              <div className="social-links">
                {/* <a href="#" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a> */}
                <a
                  href="https://www.facebook.com/VirtualManagementResources/"
                  className="facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                {/* <a href="#" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a> */}
                {/* <a href="#" className="google-plus">
                  <i className="fa fa-google-plus"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/katelyn-banman-b3ba1b7/"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
