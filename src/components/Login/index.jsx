import React, { Component } from "react";
import { Link } from "react-router-dom";

//context
// import { AuthContext } from "../../contexts/AuthContext";

//firebase
// import firebase from "../../config/firebase";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       // AuthContext.changeState(true)
  //       this.props.history.push("/home");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      // <AuthContext.Consumer>
      //   {authContext => {
          // return (
            <div>
              <div className="container text-center">
                <div className="col-md-12"></div>
              </div>
              <div className="limiter">
                <div className="container-login100">
                  <div className="wrap-login100 p-t-50 p-b-20">
                    <form
                      // onSubmit={this.handleSubmit}
                      method="POST"
                      className="login100-form validate-form"
                    >
                      <span className="login100-form-title p-b-70">
                        Welcome on EpicDL Log In
                      </span>

                      <div
                        className="wrap-input100 validate-input m-t-40 m-b-35"
                        data-validate="Enter username"
                      >
                        <input
                          type="email"
                          name="email"
                          autoFocus
                          className="input100"
                          required
                          id="id_email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />

                        <span
                          className="focus-input100"
                          data-placeholder="Email"
                        ></span>
                      </div>

                      <div
                        className="wrap-input100 validate-input m-b-50"
                        data-validate="Enter password"
                      >
                        <input
                          type="password"
                          name="password"
                          className="input100"
                          required
                          id="id_password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />

                        <span
                          className="focus-input100"
                          data-placeholder="Password"
                        ></span>
                      </div>

                        <Link to="/">
                      <div className="container-login100-form-btn">
                        <button   className="login100-form-btn">
                          Login
                        </button>
                      </div>
                        </Link>

                      <ul className="login-more p-t-80">
                        <li className="m-b-8">
                          <span className="txt1">Forgot</span>

                          <Link to="/forgot" className="txt2">
                            Password?
                          </Link>
                        </li>

                        <li>
                          <span className="txt1">Don’t have an account?</span>

                          <Link to="/signup" className="txt2">
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          // );
      //   }}
      // </AuthContext.Consumer>
    );
  }
}

export default Login;
