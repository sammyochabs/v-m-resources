import Head from "next/head";
import { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const AddPost = () => {
  let [toggleClass, setToggleclass] = useState("d-flex");
  let [blogPostContent, setBlogPostContent] = useState("");
  let [blogPostTitle, setBlogPostTitle] = useState("");
  const [message, setMessage] = useState();
  const [editorContent, setEditorContent] = useState();
  const [currentView, setCurrentView] = useState("Add");

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

  return (
    <div>
      <Head>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
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
        <link rel="stylesheet" href="/devblog/icofont/icofont.min.css"></link>
      </Head>
      <div className={toggleClass} id="wrapper">
        <div className="bg-dark border-right" id="sidebar-wrapper">
          <div className="sidebar-heading text-light">
            Virtual Management Resources{" "}
          </div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              className="list-group-item list-group-item-action bg-dark text-light"
            >
              <i className="icofont-ui-edit"></i> Add A Blog Post
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-dark text-light"
            >
              <i className="icofont-edit"></i> Manage Blog Posts
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
                  <label htmlFor="postTitle">Enter The Title Of The Post</label>
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
};

export default AddPost;
