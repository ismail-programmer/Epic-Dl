import React, { Component } from "react";

import { Link } from "react-router-dom";

//context
import { AuthContext } from "../../contexts/AuthContext";

//firebase
import firebase from "../../config/firebase";

class Header extends Component {
  static contextType = AuthContext;

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.refs.navbar.classList.add("change-fix-top");
    } else {
      this.refs.navbar.classList.remove("change-fix-top");
    }
  };

  handleClick = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {})
      .catch(function(error) {
        // An error happened.
      });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <section id="con-cover" style={{ marginTop: this.props.marginTop }}>
        <div className="container">
          <div className="row">
            <nav
              ref="navbar"
              className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
            >
              <Link className="navbar-brand" to="#">
                EpicDL
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-item nav-link" to="/products">
                    Products
                  </Link>
                  <Link className="nav-item nav-link" to="/contact">
                    Contact
                  </Link>

                  {!this.context.isAuthenticated ? (
                    <Link className="nav-item nav-link" to="/signin">
                      <button
                        type="button"
                        className="button btn-signup btn-sm"
                      >
                        SIGN IN
                      </button>
                    </Link>
                  ) : (
                    <Link className="nav-item nav-link" to="/">
                      <button
                        type="button"
                        className="button btn-signup btn-sm"
                        onClick={this.handleClick}
                      >
                        SIGN Out
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
          <div className="container text-center headerrow">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1 className="headline">{this.props.text}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
