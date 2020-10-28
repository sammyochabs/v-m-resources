const Clients = () => {
  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Clients</h3>
        </header>

        <div id="demo" className="carousel slide p-4" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around">
                <img src="assets/img/clients/client-1.png" alt="" />
                <img src="assets/img/clients/client-2.png" alt="" />
                <img src="assets/img/clients/client-3.png" alt="" />
                <img src="assets/img/clients/client-4.png" alt="" />
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <img src="assets/img/clients/client-5.png" alt="" />
                <img src="assets/img/clients/client-6.png" alt="" />
                <img src="assets/img/clients/client-7.png" alt="" />
                <img src="assets/img/clients/client-8.png" alt="" />
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>

        <style jsx>
          {`
            a.carousel-control-prev,
            a.carousel-control-next {
              width: 7%;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Clients;
