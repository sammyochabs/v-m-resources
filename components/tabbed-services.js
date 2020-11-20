const TabbedServices = () => {
  return (
    <section id="services" className="container-fluid section-bg py-5">
      <div className="row">
        <div className="col-lg-8 text-white  text-center mx-auto">
          <header className="section-header wow fadeInUp">
            <h3>Services</h3>
            <p>
              We provide services In two categories - Virtual Assistant Services
              and Online Business Manager Services. Click on any of the tabs to
              view the services we provide for each category.
            </p>
          </header>
        </div>
      </div>

      <div className="px-3 rounded">
        <ul
          id="myTab2"
          role="tablist"
          className="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center"
        >
          <li className="nav-item flex-sm-fill">
            <a
              id="home2-tab"
              data-toggle="tab"
              href="#home2"
              role="tab"
              aria-controls="home2"
              aria-selected="true"
              className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active"
            >
              Virtual Assistant Services
            </a>
          </li>
          <li className="nav-item flex-sm-fill">
            <a
              id="profile2-tab"
              data-toggle="tab"
              href="#profile2"
              role="tab"
              aria-controls="profile2"
              aria-selected="false"
              className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0"
            >
              Online Business Manager Services
            </a>
          </li>
          {/* <li className="nav-item flex-sm-fill">
            <a
              id="contact2-tab"
              data-toggle="tab"
              href="#contact2"
              role="tab"
              aria-controls="contact2"
              aria-selected="false"
              className="nav-link text-uppercase font-weight-bold rounded-0"
            >
              Contact
            </a>
          </li> */}
        </ul>
        <div id="myTab2Content" className="tab-content">
          <div
            id="home2"
            role="tabpanel"
            aria-labelledby="home-tab"
            className="tab-pane fade px-4 py-5 show active"
          >
            {/* <p className="leade font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leade font-italic mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> */}
            <div className="row leade">
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="fas fa-suitcase"></i>
                </div>
                <h4 className="title">
                  <a href="">Administrative and office support </a>
                </h4>
                <p className="description">
                  We can take on any administrative duties including but not
                  limited to data entry, uploading contacts, making calls,
                  creating documents and organizing data. We can take on any of
                  your daily tasks to give you more time to focus on your
                  business. No task to small
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="fa fa-bar-chart"></i>
                </div>
                <h4 className="title">
                  <a href="">Market research/Internet Research </a>
                </h4>
                <p className="description">
                  We will research any topic you are in need of more information
                  of and present it to you in a clear and concise way. We can
                  also take this one step further by doing market research on
                  your topic, present results so you are able to make educated
                  decisions on your product or service
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4 className="title">
                  <a href="">Event Planning </a>
                </h4>
                <p className="description">
                  We will take on all stages of your event that needs to be
                  planned. From planning and research of venues, food, lodging,
                  room set up too all the little details that make your event
                  the best it can be. We will see this through from start to
                  finish taking on all the headaches that may come with planning
                  an event of any size.
                </p>
              </div>

              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4 className="title">
                  <a href="">Calendar and/or Appointment Management</a>
                </h4>
                <p className="description">
                  We can take care of all aspects of your calendar from adding
                  appointments and events to blocking out personal time so you
                  can keep that work life balance. Need to cancel or reschedule?
                  Let us know and we will take care of this for you.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h4 className="title">
                  <a href="">Operational process development </a>
                </h4>
                <p className="description">
                  We can look at the big picture of your business strategically
                  and create an operational system that streamlines your
                  organization with optimized communications, accountability and
                  results. Businesses thrive when their operational process is
                  organized
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4 className="title">
                  <a href="">CRM management </a>
                </h4>
                <p className="description">
                  We can learn any customer relationship data base you currently
                  use and manage your customer relationships and interactions as
                  if you were answering them yourself. Professional, informative
                  and timely. These relationships are what a business is built
                  off of so let us create that personal touch.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="far fa-envelope"></i>
                </div>
                <h4 className="title">
                  <a href="">Email Management </a>
                </h4>
                <p className="description">
                  Let us organize you inbox, prioritize your emails and respond
                  if needed in a timely fashion so nothing is forgotten, lost or
                  pushed aside when it should be front and center.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <h4 className="title">
                  <a href=""> Social Media Implementation &amp; Management</a>
                </h4>
                <p className="description">
                  We can implement any social media campaign you have on your
                  radar or manage what you already have going. Instagram,
                  Facebook, LinkedIn or Pinterest? We can do it all.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4 className="title">
                  <a href=""> Accounting, Invoicing &amp; Bookkeeping</a>
                </h4>
                <p className="description">
                  We can take all receipts, invoices and payments and complete
                  all the data entry for you in whatever accounting system you
                  have in place. We are also happy to create reports on your
                  spending so you are aware of where you accounts payable are
                  going to and where you can cut back if needed.
                </p>
              </div>
            </div>
          </div>
          <div
            id="profile2"
            role="tabpanel"
            aria-labelledby="profile-tab"
            className="tab-pane fade px-4 py-5"
          >
            <div className="row leade">
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h4 className="title">
                  <a href="">Operational Management</a>
                </h4>
                <p className="description">
                  This is all things operational in your business. From systems
                  that are used or needed, to creating or improving processes on
                  your day to days. I am here to streamline your operational
                  procedures to make you and your employee’s life more
                  simplistic.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h4 className="title">
                  <a href="">Project Management</a>
                </h4>
                <p className="description">
                  Seeing your project through from start to finish. Let me take
                  on the details, timelines and tasks to make your launch, new
                  system, events etc. come together in one perfect package.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fas fa-people-carry"></i>
                </div>
                <h4 className="title">
                  <a href="">People Management</a>
                </h4>
                <p className="description">
                  Whether you are a team of 2 and need to outsource and hire, or
                  a team of 25 and need day to day supervision, we can cater to
                  your business and make sure you have the best team possible to
                  meet your business needs
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fa fa-bar-chart"></i>
                </div>
                <h4 className="title">
                  <a href=""> Metric Management</a>
                </h4>
                <p className="description">
                  Running the stats on your campaigns, products or social media
                  is imperative to making good business and financial decisions
                  for your current and future business. We make sure you have
                  the information you need to feel confident your business
                  decisions.
                </p>
              </div>
            </div>
          </div>
          {/* <div
            id="contact2"
            role="tabpanel"
            aria-labelledby="contact-tab"
            className="tab-pane fade px-4 py-5"
          >
            <p className="leade font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leade font-italic mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
        </div>
      </div>
      <style jsx>
        {`
          .section-bg {
            background: #f7f7f7;
          }
          /*
            *
            * ==========================================
            * CUSTOM UTIL CLASSES
            * ==========================================
            *
            */

          /* Rounded tabs */

          @media (min-width: 576px) {
            .rounded-nav {
              border-radius: 50rem !important;
            }
          }

          @media (min-width: 576px) {
            .rounded-nav .nav-link {
              border-radius: 50rem !important;
            }
          }

          /* With arrow tabs */

          .with-arrow .nav-link.active {
            position: relative;
          }

          .with-arrow .nav-link.active::after {
            content: "";
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #2b90d9;
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            display: block;
          }

          /* lined tabs */

          .lined .nav-link {
            border: none;
            border-bottom: 3px solid transparent;
          }

          .lined .nav-link:hover {
            border: none;
            border-bottom: 3px solid transparent;
          }

          .lined .nav-link.active {
            background: none;
            color: #555;
            border-color: #2b90d9;
          }

          /*
            *
            * ==========================================
            * FOR DEMO PURPOSE
            * ==========================================
            *
            */
        `}
      </style>
    </section>
  );
};

export default TabbedServices;
