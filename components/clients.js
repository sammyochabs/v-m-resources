const Clients = () => {
  return (
    <section id="clients">
      <div className="container-fluid" data-aos="zoom-in">
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
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src="client-1.png"
                  alt=""
                />
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src="client-2.jpg"
                  alt=""
                />
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src="client-3.png"
                  alt=""
                />
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src="client-4.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <img src="client-2.jpg" alt="" />
                <img src="client-4.jpg" alt="" />
                <img src="client-1.png" alt="" />
                <img src="client-3.png" alt="" />
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
            @media (max-width: 640px) {
              img {
                width: 135px;
                margin-right: 8px;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Clients;
