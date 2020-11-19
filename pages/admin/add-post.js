import Head from "next/head";
import { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import blogPostModel from "../../models/blogPostModel";
import dbConnect from "../../utils/dbConnection";
import ReactHtmlParser from "react-html-parser";

const AddPost = ({ posts }) => {
  let [toggleClass, setToggleclass] = useState("d-flex");
  let [blogPostContent, setBlogPostContent] = useState("");
  let [blogPostTitle, setBlogPostTitle] = useState("");
  const [message, setMessage] = useState();
  const [editorContent, setEditorContent] = useState();
  const [currentView, setCurrentView] = useState();
  const [postsArray, setPostsArray] = useState(posts);

  const arrayUpdater = (array, index) => {
    array.splice(index, 1);
    return array;
  };

  const handleContentChange = (content) => {
    setEditorContent(content);
    setBlogPostContent(content);
  };

  const handleTitleChange = (event) => {
    setBlogPostTitle(event.target.value);
  };

  const handleBlur = () => {
    setMessage("");
  };

  const handleFocus = () => {
    setMessage("");
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const resp = await fetch("/api/blogPostApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: blogPostTitle,
        content: blogPostContent,
      }),
    });

    const json = await resp.json();
    setMessage(json);
    setEditorContent("");
    setBlogPostTitle("");
  }
  async function handleDelete() {
    const resp = await fetch("/api/blogPostApi", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: titleOfPostToDelete,
      }),
    });
  }
  if (typeof window !== "undefined") {
    if (localStorage.getItem("currentView") === "Add") {
      return (
        <div>
          <Head>
            <link
              href="/vendor/bootstrap/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <link href="/css/simple-sidebar.css" rel="stylesheet" />
            <script src="/vendor/jquery/jquery.min.js"></script>
            <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Varela+Round&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
              integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <link
              rel="stylesheet"
              href="/devblog/icofont/icofont.min.css"
            ></link>
            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
              crossorigin="anonymous"
            ></script>
          </Head>
          <div className={toggleClass} id="wrapper">
            <div className="bg-dark border-right" id="sidebar-wrapper">
              <div className="sidebar-heading text-light">
                Virtual Management Resources{" "}
              </div>
              <div className="list-group list-group-flush">
                <a
                  onClick={() => {
                    localStorage.setItem("currentView", "Add");
                    setCurrentView("Add");
                  }}
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light"
                >
                  <i className="icofont-ui-edit"></i> Add A Blog Post
                </a>
                <a
                  onClick={() => {
                    localStorage.setItem("currentView", "Edit");
                    setCurrentView("Manage");
                  }}
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light"
                >
                  <i className="icofont-edit"></i> Delete Blog Posts
                </a>

                {/* <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Events
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Profile
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Status
              </a> */}
              </div>
            </div>

            <div id="page-content-wrapper">
              <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
                <button
                  onClick={(event) => {
                    event.preventDefault;
                    if (toggleClass === "d-flex") {
                      setToggleclass("d-flex toggled");
                    } else {
                      setToggleclass("d-flex");
                    }
                  }}
                  className="btn btn-primary "
                  id="menu-toggle"
                >
                  Toggle Menu
                </button>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link text-light" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="container-fluid">
                {message && message.message === "success" ? (
                  <div className="alert alert-success" role="alert">
                    BlogPost Successfully Addedd!!!
                  </div>
                ) : message && message.message !== "success" ? (
                  <div className="alert alert-danger" role="alert">
                    Something Went wrong please try again
                  </div>
                ) : (
                  ""
                )}
                <h1
                  style={{
                    fontSize: "18px",
                  }}
                  className="mt-2 text-center"
                >
                  Add A Blog Post
                </h1>
                <div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="postTitle">
                        Enter The Title Of The Post
                      </label>
                      <input
                        onChange={handleTitleChange}
                        value={blogPostTitle}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="mt-5 mb-1">Enter Your Post Content </p>
                    <form>
                      <div className="form-group">
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="mt-5 btn btn-primary"
                        >
                          Submit Post
                        </button>
                      </div>
                    </form>
                  </div>

                  <SunEditor
                    setContents={editorContent}
                    onChange={handleContentChange}
                    enableToolbar={true}
                    name="blogPost"
                    setOptions={{
                      height: 400,
                      buttonList: buttonList.complex,
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              * {
                font-family: "Varela Round", sans-serif;
              }
            `}
          </style>
        </div>
      );
    } else if (localStorage.getItem("currentView") === "Edit") {
      return (
        <div>
          <Head>
            <link
              href="/vendor/bootstrap/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <link href="/css/simple-sidebar.css" rel="stylesheet" />
            <script src="/vendor/jquery/jquery.min.js"></script>
            <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Varela+Round&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="/devblog/icofont/icofont.min.css"
            ></link>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            ></link>
            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
              crossorigin="anonymous"
            ></script>
          </Head>
          <div className={toggleClass} id="wrapper">
            <div className="bg-dark border-right" id="sidebar-wrapper">
              <div className="sidebar-heading text-light">
                Virtual Management Resources{" "}
              </div>
              <div className="list-group list-group-flush">
                <a
                  onClick={() => {
                    localStorage.setItem("currentView", "Add");
                    setCurrentView("Add");
                  }}
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light"
                >
                  <i className="icofont-ui-edit"></i> Add A Blog Post
                </a>
                <a
                  onClick={() => {
                    localStorage.setItem("currentView", "Edit");
                    setCurrentView("Manage");
                  }}
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light"
                >
                  <i className="icofont-edit"></i> Delete Blog Posts
                </a>

                {/* <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Events
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Profile
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-light"
              >
                Status
              </a> */}
              </div>
            </div>

            <div id="page-content-wrapper">
              <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
                <button
                  onClick={(event) => {
                    event.preventDefault;
                    if (toggleClass === "d-flex") {
                      setToggleclass("d-flex toggled");
                    } else {
                      setToggleclass("d-flex");
                    }
                  }}
                  className="btn btn-primary "
                  id="menu-toggle"
                >
                  Toggle Menu
                </button>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link text-light" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="container-fluid">
                <h1
                  style={{
                    fontSize: "18px",
                  }}
                  className="mt-2 text-center"
                >
                  Delete Blog Posts
                </h1>
              </div>
              <div className="container-xl">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2>Blog Posts</h2>
                        </div>
                        <div className="col-sm-4">
                          <div className="search-box">
                            <i className="material-icons">&#xE8B6;</i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search&hellip;"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Post Title</th>
                          <th>Author</th>
                          {/* <th>
                            City <i className="fa fa-sort"></i>
                          </th>
                          <th>Pin Code</th>
                          <th>
                            Country <i className="fa fa-sort"></i>
                          </th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {postsArray.map((post, index, array) => {
                          return (
                            <tr>
                              <td>{post.date || "Thursday Nov 9 2020"}</td>
                              <td>{post.title}</td>
                              <td>{post.author || "Katelyn Banman"}</td>
                              {/* <td>Portland</td>
                              <td>97219</td>
                              <td>USA</td> */}
                              <td>
                                <a
                                  onClick={async (event) => {
                                    event.preventDefault();
                                    const resp = await fetch(
                                      "/api/blogPostApi",
                                      {
                                        method: "DELETE",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        credentials: "include",
                                        body: JSON.stringify({
                                          title: post.title,
                                        }),
                                      }
                                    );

                                    const json = await resp.json();
                                    if (json && json.message === 1) {
                                      setPostsArray(
                                        arrayUpdater(postsArray, index)
                                      );
                                      window.location.reload();
                                    }
                                  }}
                                  href=""
                                  className="delete"
                                  title="Delete"
                                  data-toggle="tooltip"
                                >
                                  <i className="material-icons">&#xE872;</i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              * {
                font-family: "Varela Round", sans-serif;
              }
              .table-responsive {
                margin: 30px 0;
              }
              .table-wrapper {
                min-width: 1000px;
                background: #fff;
                padding: 20px;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
              }
              .table-title {
                padding-bottom: 10px;
                margin: 0 0 10px;
                min-width: 100%;
              }
              .table-title h2 {
                margin: 8px 0 0;
                font-size: 22px;
              }
              .search-box {
                position: relative;
                float: right;
              }
              .search-box input {
                height: 34px;
                border-radius: 20px;
                padding-left: 35px;
                border-color: #ddd;
                box-shadow: none;
              }
              .search-box input:focus {
                border-color: #3fbae4;
              }
              .search-box i {
                color: #a0a5b1;
                position: absolute;
                font-size: 19px;
                top: 8px;
                left: 10px;
              }
              table.table tr th,
              table.table tr td {
                border-color: #e9e9e9;
              }
              table.table-striped tbody tr:nth-of-type(odd) {
                background-color: #fcfcfc;
              }
              table.table-striped.table-hover tbody tr:hover {
                background: #f5f5f5;
              }
              table.table th i {
                font-size: 13px;
                margin: 0 5px;
                cursor: pointer;
              }
              table.table td:last-child {
                width: 130px;
              }
              table.table td a {
                color: #a0a5b1;
                display: inline-block;
                margin: 0 5px;
              }
              table.table td a.view {
                color: #03a9f4;
              }
              table.table td a.edit {
                color: #ffc107;
              }
              table.table td a.delete {
                color: #e34724;
              }
              table.table td i {
                font-size: 19px;
              }
              .pagination {
                float: right;
                margin: 0 0 5px;
              }
              .pagination li a {
                border: none;
                font-size: 95%;
                width: 30px;
                height: 30px;
                color: #999;
                margin: 0 2px;
                line-height: 30px;
                border-radius: 30px !important;
                text-align: center;
                padding: 0;
              }
              .pagination li a:hover {
                color: #666;
              }
              .pagination li.active a {
                background: #03a9f4;
              }
              .pagination li.active a:hover {
                background: #0397d6;
              }
              .pagination li.disabled i {
                color: #ccc;
              }
              .pagination li i {
                font-size: 16px;
                padding-top: 6px;
              }
              .hint-text {
                float: left;
                margin-top: 6px;
                font-size: 95%;
              }
            `}
          </style>
        </div>
      );
    } else {
      return "jjjj";
    }
  } else {
    return "ddd";
  }
};

export default AddPost;

export async function getServerSideProps(context) {
  let networkErr;
  let posts;
  try {
    await dbConnect();
  } catch (err) {
    console.log("network error!!!");
    networkErr = "there was an error connecting to the database";
  }

  if (!networkErr) {
    posts = await blogPostModel.find({});

    posts = JSON.parse(JSON.stringify(posts));
  } else {
    console.log("fix your internet");
  }
  return {
    props: {
      posts,
    },
  };
}
