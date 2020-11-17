import Head from "next/head";

const BlogNav = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "rgba(0,0,0,0.9)",
            marginBottom: 13,
          }}
        >
          <div>
            <div>
              <h1
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Virtual Management Resources
              </h1>
            </div>
            <div>
              <ul
                className="navi-link"
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>

                <li>
                  <a href="/#contact">Contact</a>
                </li>
                <li>
                  <a href="/#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        * {
          font-family: "Varela Round", sans-serif;
        }
        li {
          display: inline;
        }

        .navi-link {
          list-style: none;
          margin: 0;
          text-align: center;
        }

        .navi-link:before,
        .navi-link:after {
          content: " ";
          display: table;
        }

        .navi-link:after {
          clear: both;
        }

        .navi-link li {
          display: inline-block;
          margin: 2px 4px;
        }

        .navi-link li a {
          display: block;
          color: white;
          text-align: center;
          font-size: 16px;
          transition: all 0.3s ease-in-out;
        }

        .navi-link li a:hover {
          color: #1abc9c;
        }
      `}</style>
    </div>
  );
};

export default BlogNav;
