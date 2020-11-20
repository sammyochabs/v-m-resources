import Head from "next/head";
import blogPostModel from "../../../models/blogPostModel";
import dbConnect from "../../../utils/dbConnection";
import ReactHtmlParser from "react-html-parser";
import BlogNav from "../../../components/blogNav";

const SinglePost = ({ post }) => {
  if (post.length > 0) {
    return (
      <div>
        <Head>
          <link
            rel="shortcut icon"
            href="/devblog/images/favicon/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            type="image/x-icon"
            href="/devblog/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/devblog/css/plugin.css"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="/devblog/css/style.css"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="/devblog/css/syntax/shCore.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="devblog/css/syntax/shThemeDefault.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700"
          ></link>
          <script
            type="text/javascript"
            src="/devblog/js/jquery.min.js"
          ></script>
          <script type="text/javascript" src="/devblog/js/plugin.js"></script>

          <script type="text/javascript" src="/devblog/js/scripts.js"></script>

          <script
            type="text/javascript"
            src="/devblog/js/syntax/shCore.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushCss.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushJScript.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushPerl.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushPhp.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushPlain.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushPython.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushRuby.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushSql.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushVb.js"
          ></script>
          <script
            type="text/javascript"
            src="/devblog/js/syntax/shBrushXml.js"
          ></script>
        </Head>
        <BlogNav />
        <div>
          <div className="preloader">
            <div className="rounder"></div>
          </div>

          <div id="main">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="about-fixed">
                    <div className="my-pic">
                      <img src="/kate.jpg" alt="" />
                      <a
                        href="javascript:void(0)"
                        className="collapsed"
                        data-target="#menu"
                        data-toggle="collapse"
                      >
                        <i className="icon-menu menu"></i>
                      </a>
                      <div id="menu" className="collapse">
                        <ul className="menu-link">
                          <li>
                            <a href="/#team">About</a>
                          </li>
                          <li>
                            <a href="/#services">Services</a>
                          </li>
                          <li>
                            <a href="/#contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="my-detail">
                      <div className="white-spacing">
                        <h1>Katelyn Banman</h1>
                        <span>
                          Online Business Manager And Virtual Assistant
                        </span>
                      </div>

                      <ul className="social-icon">
                        <li>
                          <a href="#" target="_blank" className="facebook">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#" target="_blank" className="twitter">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li> */}
                        <li>
                          <a href="#" target="_blank" className="linkedin">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#" target="_blank" className="github">
                            <i className="fa fa-github"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="col-md-12 page-body">
                    <div className="row">
                      <div className="sub-title">
                        <a href="/blog" title="Go to Home Page">
                          <h2>Back Home</h2>
                        </a>
                        {/* <a href="#comment" className="smoth-scroll">
                          <i className="icon-bubbles"></i>
                        </a> */}
                      </div>

                      <div className="col-md-12 content-page">
                        <div className="col-md-12 blog-post">
                          <div className="post-title">
                            <h1>{post[0].title}</h1>
                          </div>
                          {ReactHtmlParser(post[0].content)}
                          <div className="post-info">
                            <span>
                              {new Date(post[0].date).toDateString()} {"By "}
                              <a href="#" target="_blank">
                                Alex Parker
                              </a>
                            </span>
                          </div>

                          <div className="about-author margin-top-70 margin-bottom-50">
                            <div className="picture">
                              <img
                                src="/kate.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>

                            <div className="c-padding">
                              <h3>
                                Article By{" "}
                                <a
                                  href="#"
                                  target="_blank"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Visit Alex Website"
                                >
                                  Katelyn Banman
                                </a>
                              </h3>
                              <p>
                                An Online Business Manager and Virtual Assistant
                                With a Bachelor of Science in Business
                                Administration combined with more than 15 years
                                of operational management and customer service
                                experience. I am in a unique position to deliver
                                a wide variety of services that my clients
                                continually rely on for long-term business
                                results.
                              </p>
                            </div>
                          </div>

                          {/* <div className="you-may-also-like margin-top-50 margin-bottom-50">
                            <h3>You may also like</h3>
                            <div className="row">
                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <a href="/blog/posts/What Is The Difference Between An OBM and A VA">
                                  <p>
                                    What Is The Difference Between An OBM and A
                                    VA
                                  </p>
                                </a>
                              </div>

                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <a href="/blog/posts/How Do I Know If I Need An OBM Or A VA">
                                  <p>How Do I Know If I Need An OBM Or A VA</p>
                                </a>
                              </div>

                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <a href="">
                                  <p>How To Get Good VA's</p>
                                </a>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 page-body margin-top-50 footer">
                    <footer>
                      <ul className="menu-link">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/#about">About</a>
                        </li>
                        <li>
                          <a href="/#services">Services</a>
                        </li>
                        <li>
                          <a href="/#contact">Contact</a>
                        </li>
                      </ul>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="scroll-down-popup" className="endpage-box">
            <h4>Read Also</h4>
            <a href="/blog/posts/How Do I Know If I Need An OBM Or A VA">
              How Do I Know If I Need An OBM Or A VA
            </a>
          </div> */}

          <a href="#" className="scroll-to-top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export async function getServerSideProps(context) {
  await dbConnect();

  let post = await blogPostModel.find({ title: context.params.postTitle });
  post = JSON.parse(JSON.stringify(post));

  return { props: { post } };
}

export default SinglePost;
