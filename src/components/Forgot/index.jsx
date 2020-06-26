import React, { Component } from "react";
import { Link } from "react-router-dom";

//context
// import { AuthContext } from "../../contexts/AuthContext";

//firebase
// import firebase from "../../config/firebase";

class index extends Component {

state={
  email: ""
}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };



  // handleEmail = e => {
  //   e.preventDefault();
  //   alert();
  //   var emailAddress = this.refs.emailValue.value;
  //   firebase
  //   .auth()
  //   .sendPasswordResetEmail(emailAddress)
  //   .then(function() {
  //     console.log(emailAddress);
  //       // Email sent.
  //     })
  //     .catch(function(error) {
  //       // An error happened.
  //     });
  // };

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="col-md-12"></div>
        </div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-50 p-b-20">
              <form
                method="POST"
                className="validate-form"
                // onSubmit={this.handleSubmit}
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="PvkpPG60y4tqNa79OjIzMS79udscAUUZ2uj8Bq6xNKzoQxufFIiU2BfCuizjuZbv"
                />
                <span className="login100-form-title p-b-70">
                  Password Reset
                </span>
                <div
                  className="wrap-input100 validate-input m-b-50"
                  data-validate="Enter password"
                >
                  <input
                    type="email"
                    name="email"
                    maxlength="254"
                    className="input100"
                    required
                    id="id_email"
                    ref="emailValue"
                    onChange={this.handleChange}
                  />

                  <span
                    className="focus-input100"
                    data-placeholder="Email"
                  ></span>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit">
                    Password Reset
                  </button>
                </div>
                <ul className="login-more p-t-60">
                  <li className="m-b-8">
                    <Link to="/signin" className="txt2">
                      Sign in
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
        <div id="dropDownSelect1"></div>
      </div>
    );
  }
}

export default index;
