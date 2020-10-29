import React from "react";

export default function FeaturedServices() {
  return (
    <div>
      <section id="featured-services">
        <div className="container">
          <div className="row">
            <div class="col-lg-4 box">
              <i class="fas fa-phone"></i>
              <h4 class="title">
                <a href="">Administrative &amp; Office Support </a>
              </h4>
              <p class="description">
                We can take on any administrative duties including but not
                limited to data entry, uploading contacts, making calls,
                creating documents and organizing data. We can take on any of
                your daily tasks to give you more time to focus on your
                business. No task too small
              </p>
            </div>

            <div class="col-lg-4 box box-bg">
              <i class="fas fa-project-diagram"></i>
              <h4 class="title">
                <a href="">Project Management</a>
              </h4>
              <p class="description">
                We can take whatever project you have on your plate, break it
                down into manageable parts and see each of these parts from
                implantation to completion for a flawless launch in a timely
                fashion.
              </p>
            </div>

            <div class="col-lg-4 box">
              <i class="fas fa-headset"></i>
              <h4 class="title">
                <a href="">CRM Management</a>
              </h4>
              <p class="description">
                We can learn any customer relationship data base you currently
                use and manage your customer relationships and interactions as
                if you were answering them yourself. Professional, informative
                and timely. These relationships are what a business is built off
                of so let us create that personal touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
