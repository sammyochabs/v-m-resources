const Testimonials = () => {
  return (
    // <div className="container-xl p-3">
    //   <div className="row">
    //     <div className="col-sm-12">
    <section id="testimonials" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>What My Clients Say About Me</h3>
        </header>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=Cfor+Spark&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          Working with Katelyn could not have come at a better
                          time! As my business grew, my time to complete
                          everything became very limited. Her professionalism
                          and willingness to help made it easy to transition
                          tasks to her while coming up with a plan to move the
                          operations of my business forward. I could not have
                          asked for a better OBM to join my team
                        </p>
                        <p className="overview">
                          <b>C4Spark</b>, Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=Tina+Mc&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          As reluctant as I am to give up control of my business
                          to someone else, Katelyn made it super easy for me.
                          Having her as my tech support for my cooking shows has
                          proven to be priceless. I don't know how I can run my
                          business without her. Thank you Katelyn for your
                          patience, punctuality and attention to detail. I'm
                          looking forward to growing my business with your help.
                        </p>
                        <p className="overview">
                          <b>Tina Mcdermott</b>, Business Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=Ca+Sp&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          Working with Katelyn could not have come at a better
                          time! As my business grew, my time to complete
                          everything became very limited. Her professionalism
                          and willingness to help made it easy to transition
                          tasks to her while coming up with a plan to move the
                          operations of my business forward. I could not have
                          asked for a better OBM to join my team
                        </p>
                        <p className="overview">
                          <b>C4Spark</b>, Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=Tina+Mc&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          As reluctant as I am to give up control of my business
                          to someone else, Katelyn made it super easy for me.
                          Having her as my tech support for my cooking shows has
                          proven to be priceless. I don't know how I can run my
                          business without her. Thank you Katelyn for your
                          patience, punctuality and attention to detail. I'm
                          looking forward to growing my business with your help.
                        </p>
                        <p className="overview">
                          <b>Tina Mcdermott</b>, Business Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=Tina+McDermott&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          As reluctant as I am to give up control of my business
                          to someone else, Katelyn made it super easy for me.
                          Having her as my tech support for my cooking shows has
                          proven to be priceless. I don't know how I can run my
                          business without her. Thank you Katelyn for your
                          patience, punctuality and attention to detail. I'm
                          looking forward to growing my business with your help.
                        </p>
                        <p className="overview">
                          <b>Tina Mcdermott</b>, Business Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <img
                      src="https://ui-avatars.com/api/?name=cohn+soe&background=0D8ABC&color=fff"
                      className="mr-3"
                      alt=""
                    />
                    <div className="media-body">
                      <div className="testimonial">
                        <p>
                          Working with Katelyn could not have come at a better
                          time! As my business grew, my time to complete
                          everything became very limited. Her professionalism
                          and willingness to help made it easy to transition
                          tasks to her while coming up with a plan to move the
                          operations of my business forward. I could not have
                          asked for a better OBM to join my team
                        </p>
                        <p className="overview">
                          <b>C4Spark</b>, Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            color: #000;
            font-size: 26px;
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            position: relative;
            margin: 30px 0 70px;
          }
          h2::after {
            content: "";
            width: 100px;
            position: absolute;
            margin: 0 auto;
            height: 4px;
            border-radius: 1px;
            background: #1c47e3;
            left: 0;
            right: 0;
            bottom: -20px;
          }
          .carousel .carousel-item {
            color: #999;
            overflow: hidden;
            min-height: 120px;
            font-size: 13px;
          }
          .carousel .media img {
            width: 80px;
            height: 80px;
            display: block;
            border-radius: 50%;
          }
          .carousel .testimonial {
            padding: 0 15px 0 60px;
            position: relative;
          }

          .carousel .overview b {
            text-transform: uppercase;
            color: #1c47e3;
          }
          .carousel .carousel-indicators {
            bottom: -40px;
          }
          .carousel-indicators li,
          .carousel-indicators li.active {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: 1px 3px;
            box-sizing: border-box;
          }
          .carousel-indicators li {
            background: #e2e2e2;
            border: 4px solid #fff;
          }
          .carousel-indicators li.active {
            color: #fff;
            background: #1c47e3;
            border: 5px double;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
