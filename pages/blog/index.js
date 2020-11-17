import Head from "next/head";

import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import dbConnect from "../../utils/dbConnection";
import BlogPostModel from "../../models/blogPostModel";
import ReactHtmlParser from "react-html-parser";
import BlogNav from "../../components/blogNav";

const Blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/css/uikit.min.css"
        />
        <link rel="shortcut icon" href="/devblog/images/favicon/favicon.ico" />
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
          href="https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700"
        ></link>
        <script type="text/javascript" src="/devblog/js/jquery.min.js"></script>
        <script type="text/javascript" src="/devblog/js/plugin.js"></script>

        <script type="text/javascript" src="/devblog/js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit-icons.min.js"></script>
      </Head>
      <BlogNav />

      <div className="preloader">
        <div className="rounder"></div>
      </div>

      <div id="main ">
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
                        <a href="/#about-me">About</a>
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
                    <span>Online Business Manager And Virtual Assistance</span>
                  </div>

                  <ul className="social-icon">
                    <li>
                      <a
                        href="https://www.facebook.com/VirtualManagementResources/"
                        className="facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" target="_blank" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/katelyn-banman-b3ba1b7/"
                        className="linkedin"
                        target="_blank"
                      >
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
                    <h2>My Blog</h2>
                    <a href="contact.html">
                      <i className="icon-envelope"></i>
                    </a>
                  </div>

                  <div className="col-md-12 content-page">
                    {posts.map((post) => {
                      return (
                        <div className="col-md-12 blog-post">
                          <div className="post-title">
                            <a href={`/blog/posts/${post.title}`}>
                              <h1>{post.title}</h1>
                            </a>
                          </div>
                          <div className="post-info">
                            <span>
                              November 23, 2016 / by{" "}
                              <a
                                href="https://www.linkedin.com/in/katelyn-banman-b3ba1b7/"
                                target="_blank"
                              >
                                Katelyn Banman
                              </a>
                            </span>
                          </div>
                          <p
                            style={{
                              height: 230,
                              // border: "1px solid red",
                              overflow: "hidden",
                              // padding: "10px",
                            }}
                          >
                            {ReactHtmlParser(post.content)}
                          </p>
                          <a
                            href="single.html"
                            className="button button-style button-anim fa fa-long-arrow-right"
                          >
                            <span>
                              <a href={`/blog/posts/${post.title}`}>
                                Read More
                              </a>
                            </span>
                          </a>
                        </div>
                      );
                    })}

                    {/* <div className="col-md-12 blog-post">
                      <div className="post-title">
                        <a href="single.html">
                          <h1>
                            How to make your company website based on bootstrap
                            framework on localhost?
                          </h1>
                        </a>
                      </div>
                      <div className="post-info">
                        <span>
                          November 23, 2016 / by{" "}
                          <a href="#" target="_blank">
                            Alex Parker
                          </a>
                        </span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae ut ratione similique temporibus tempora
                        dicta soluta? Qui hic, voluptatem nemo quo corporis
                        dignissimos voluptatum debitis cumque fugiat mollitia
                        quasi quod. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Molestiae ut ratione similique.
                      </p>
                      <a
                        href="single.html"
                        className="button button-style button-anim fa fa-long-arrow-right"
                      >
                        <span>Read More</span>
                      </a>
                    </div> */}

                    <div className="col-md-12 text-center">
                      <a
                        href="javascript:void(0)"
                        id="load-more-post"
                        className="load-more-button"
                      >
                        Load
                      </a>
                      <div id="post-end-message"></div>
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

      <a href="#" className="scroll-to-top">
        <i className="fa fa-long-arrow-up"></i>
      </a>
      <style jsx>{``}</style>
    </div>
  );
};

export default Blog;

export async function getStaticProps(context) {
  let networkErr;
  let posts;
  try {
    await dbConnect();
  } catch (err) {
    networkErr = "there was an error connecting to the database";
  }

  if (!networkErr) {
    posts = await BlogPostModel.find({});

    posts = JSON.parse(JSON.stringify(posts));
  }
  return {
    props: {
      posts,
    },
  };
}
