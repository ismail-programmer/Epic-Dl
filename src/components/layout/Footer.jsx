import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <div>
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h5>About Us</h5>
                <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis Consectetuer adipiscing elit,
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  magna aliquam. Erat volutpat. Ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis
                </p>
                <p className="social-links">
                  <Link to="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </p>
              </div>
              <div className="col-md-2">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Our Products</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Host</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Customer Services</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Privacy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Security</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Terms of Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>
                      <span>Sitemap</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Contact Info</h5>
                <p className="brand">
                  <i className="fas fa-map-marker-alt"></i>EpicDL
                </p>
                <p className="address">
                  Lorem ipsum dolor sit amet Gardner, MA 01440
                </p>
                <p className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <Link className="phone" to="tel:+18881234567">
                    +1 888 123 4567
                  </Link>
                </p>
                <p className="e-mail">
                  <i className="fas fa-envelope"></i>info@epicdl.com
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <hr />
                <p className="copyright">
                  ©Copyright 2017 <span className="url">www.EpicDL.com</span>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
