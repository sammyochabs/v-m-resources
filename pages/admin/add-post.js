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
  const [titleOfPostToDelete, setTitleOfPostToDelete] = useState();
  const [numberOfPosts, setNumberOfPosts] = useState(posts.length);
  const [titleOfPostToEdit, setTitleOfPostToEdit] = useState();
  const [contentOfPostToEdit, setContentOfPostToEdit] = useState();

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
              href="/devblog/icofont/icofont.min.css"
            ></link>
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
                    localStorage.setItem("currentView", "Manage");
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
    } else {
      if (typeof window !== "undefined") {
        if (localStorage.getItem("currentView") === "Manage") {
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
                  href="/devblog/icofont/icofont.min.css"
                ></link>
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
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
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
                        localStorage.setItem("currentView", "Manage");
                        setCurrentView(localStorage.getItem("currentView"));
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

                  <div className="container-fluid"></div>
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
                                {/* <i className="material-icons">&#xE8B6;</i> */}
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
                              <th>index</th>
                              <th>Date</th>
                              <th>Title</th>
                              <th>Author</th>
                            </tr>
                          </thead>
                          <tbody>
                            {posts.map((post, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{post.date || "18 Nov"}</td>
                                  <td>{post.title}</td>
                                  <td>Katelyn Banman</td>
                                  <td>
                                    {/* <a
                                      onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.setItem(
                                          "currentView",
                                          "Edit"
                                        );
                                        setTitleOfPostToEdit(post.title);
                                        setContentOfPostToEdit(post.content);
                                      }}
                                      href=""
                                      className="edit"
                                      title="Edit"
                                      data-toggle="tooltip"
                                    >
                                      <i className="material-icons">&#xE254;</i>
                                    </a> */}
                                    <a
                                      onClick={async (event) => {
                                        event.preventDefault();
                                        setTitleOfPostToDelete(post.title);
                                        const resp = await fetch(
                                          "/api/blogPostApi",
                                          {
                                            method: "DELETE",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            credentials: "include",
                                            body: JSON.stringify({
                                              title: post.title,
                                            }),
                                          }
                                        );
                                        const json = await resp.json();
                                        if (json.message === 1) {
                                          setNumberOfPosts(numberOfPosts - 1);
                                          window.location.reload();
                                        }
                                      }}
                                      className="delete"
                                      title="Delete"
                                      data-toggle="tooltip"
                                    >
                                      <i
                                        style={{
                                          cursor: "pointer",
                                        }}
                                        className="text-danger material-icons"
                                      >
                                        &#xE872;
                                      </i>
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
                  href="/devblog/icofont/icofont.min.css"
                ></link>
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
                        localStorage.setItem("currentView", "Manage");
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
                        BlogPost Successfully Edited!!!
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
                      Edit Blog Post
                    </h1>
                    <div>
                      <form>
                        <div className="form-group">
                          <label htmlFor="postTitle">Post Title</label>
                          <input
                            onChange={handleTitleChange}
                            value={titleOfPostToEdit}
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
                              Save Edited Post
                            </button>
                          </div>
                        </form>
                      </div>

                      <SunEditor
                        setContents={
                          contentOfPostToEdit
                            ? ReactHtmlParser(contentOfPostToEdit)[0].props
                                .children[1].props.children[0]
                            : ""
                        }
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
        }
      } else {
        return "";
      }
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
