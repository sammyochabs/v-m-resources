import { useState } from "react";

const { default: Head } = require("next/head");

const AdminSignUp = () => {
  const [message, setMessage] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleChange(event) {
    setUsername(event.target.value);
  }

  async function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username) {
      if (password) {
        if (username.length < 1 || password.length < 1) {
        } else {
          const resp = await fetch("/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          const json = await resp.json();
          setMessage(json);
        }
      } else {
        setMessage("please fill all fields");
      }
    } else {
      setMessage("please fill all fields");
    }
  }

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      </Head>
      <div className="main-div">
        <div className=" signup-form">
          <form>
            <h2>Create Your Admin Account</h2>
            <p>Please fill in this form to create your admin account!</p>
            <hr />
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fa fa-user"></span>
                  </span>
                </div>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  required="required"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  onChange={handlePassword}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>

            <div className="form-group">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Create Account
              </button>
            </div>
          </form>
          {message ? (
            <p className="text-center">{message.message || message}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <style jsx>{`
        .main-div {
          color: #fff;
          background: #19aa8d;
          font-family: "Roboto", sans-serif;
          height: 100vh;
        }
        .form-control {
          font-size: 15px;
        }
        .form-control,
        .form-control:focus,
        .input-group-text {
          border-color: #e1e1e1;
        }
        .form-control,
        .btn {
          border-radius: 3px;
        }
        .signup-form {
          width: 400px;
          margin: 0 auto;
          padding: 30px 0;
        }
        .signup-form form {
          color: #999;
          border-radius: 3px;
          margin-bottom: 15px;
          background: #fff;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
          padding: 30px;
        }
        .signup-form h2 {
          color: #333;
          font-weight: bold;
          margin-top: 0;
        }
        .signup-form hr {
          margin: 0 -30px 20px;
        }
        .signup-form .form-group {
          margin-bottom: 20px;
        }
        .signup-form label {
          font-weight: normal;
          font-size: 15px;
        }
        .signup-form .form-control {
          min-height: 38px;
          box-shadow: none !important;
        }
        .signup-form .input-group-addon {
          max-width: 42px;
          text-align: center;
        }
        .signup-form .btn,
        .signup-form .btn:active {
          font-size: 16px;
          font-weight: bold;
          background: #19aa8d !important;
          border: none;
          min-width: 140px;
        }
        .signup-form .btn:hover,
        .signup-form .btn:focus {
          background: #179b81 !important;
        }
        .signup-form a {
          color: #fff;
          text-decoration: underline;
        }
        .signup-form a:hover {
          text-decoration: none;
        }
        .signup-form form a {
          color: #19aa8d;
          text-decoration: none;
        }
        .signup-form form a:hover {
          text-decoration: underline;
        }
        .signup-form .fa {
          font-size: 21px;
        }
        .signup-form .fa-paper-plane {
          font-size: 18px;
        }
        .signup-form .fa-check {
          color: #fff;
          left: 17px;
          top: 18px;
          font-size: 7px;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default AdminSignUp;
