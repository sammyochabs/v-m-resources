import React from "react";

export default function FeaturedServices() {
  return (
    <div>
      <section id="featured-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 box">
              <i className="fas fa-phone"></i>
              <h4 className="title">
                <a href="">Administrative &amp; Office Support </a>
              </h4>
              <p className="description">
                We can take on any administrative duties including but not
                limited to data entry, uploading contacts, making calls,
                creating documents and organizing data. We can take on any of
                your daily tasks to give you more time to focus on your
                business. No task too small
              </p>
            </div>

            <div className="col-lg-4 box box-bg">
              <i className="fas fa-project-diagram"></i>
              <h4 className="title">
                <a href="">Project Management</a>
              </h4>
              <p className="description">
                We can take whatever project you have on your plate, break it
                down into manageable parts and see each of these parts from
                implantation to completion for a flawless launch in a timely
                fashion.
              </p>
            </div>

            <div className="col-lg-4 box">
              <i className="fas fa-tasks"></i>
              <h4 className="title">
                <a href="">Operational Management</a>
              </h4>
              <p className="description">
                This is all things operational in your business. From systems
                that are used or needed, to creating or improving processes on
                your day to days. I am here to streamline your operational
                procedures to make you and your employee’s life more simplistic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
