import React, { Component } from "react";
import { Link } from "react-router-dom";

//context
// import { AuthContext } from "../../contexts/AuthContext";

//firebase
// import firebase, { db } from "../../config/firebase";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.email === "") {
      return alert("Please enter email.");
    }
    if (this.state.password !== this.state.confirmPassword) {
      return alert("You're password doesn't match.");
    }

    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(() => {
    //       db.collection("users")
    //         .add({
    //           email: this.state.email,
    //           name: this.state.name,
    //           role: 0
    //         })
    //         .then(docRef => {
    //           console.log("Document written with ID: ", docRef.id);
    //         })
    //         .catch(error => {
    //           console.error("Error adding document: ", error);
    //         });
    //       this.props.history.push("/home");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
  };
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
                onSubmit={this.handleSubmit}
                method="POST"
                className="login100-form validate-form"
              >
                <span className="login100-form-title p-b-70">
                  Welcome on EpicDL Sign Up
                </span>
                <div className="row p-t-0">
                  <div className="col-lg-6 col-sm-12">
                    <div
                      className="wrap-input100 validate-input m-t-40 m-b-35"
                      data-validate="Enter username"
                    >
                      <input
                        type="text"
                        name="name"
                        maxLength="100"
                        className="input100"
                        required
                        id="id_username"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                      <span
                        className="focus-input100"
                        data-placeholder="Username"
                      ></span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div
                      className="wrap-input100 validate-input m-t-40 m-b-35"
                      data-validate="Enter username"
                    >
                      <input
                        type="email"
                        name="email"
                        maxLength="255"
                        className="input100"
                        required
                        id="id_email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                      <span
                        className="focus-input100"
                        data-placeholder="Email"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div
                      className="wrap-input100 validate-input m-t-40 m-b-35"
                      data-validate="Enter username"
                    >
                      <input
                        type="password"
                        name="password"
                        className="input100"
                        required
                        id="id_password1"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <span
                        className="focus-input100"
                        data-placeholder="Password"
                      ></span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div
                      className="wrap-input100 validate-input m-t-40 m-b-35"
                      data-validate="Enter username"
                    >
                      <input
                        type="password"
                        name="confirmPassword"
                        className="input100"
                        required
                        id="id_password2"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                      />
                      <span
                        className="focus-input100"
                        data-placeholder="Conform Password"
                      ></span>
                    </div>
                  </div>
                </div>
                <Link to="/">
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">Sign Up</button>
                  </div>
                </Link>
                <ul className="login-more p-t-50">
                  <li className="m-b-8">
                    <span className="txt1">Back to Log In</span>
                    <Link to="/signin" className="txt2">
                      Log In?
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
      </div>
      // );
      //   }}
      // </AuthContext.Consumer>
    );
  }
}

export default Signup;
