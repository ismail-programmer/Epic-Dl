import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import '../'

//components
import Header from "./layout/Header";
import Footer from "./layout/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header text="" marginTop="-20%" />

        <section id="con-head"
         style={{ paddingTop: "3%" }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1>CONTACT US</h1>
                <h2>GET IN TOUCH WITH US</h2>
                <div className="col-sm-12">
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate zzril delenit augue duis
                  dolore te feugait nulla facilisi. Typi non habent claritatem
                  insitam; est usus legentis in iis qui facit eorum claritatem.
                  Investigationes demonstraverunt lectores.
                </p>
              </div>
              <div className="col-sm-4 text-center">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Our Location</h3>
                <h4>Typi non habent claritatem insitam; est usus legentis</h4>
              </div>
              <div className="col-sm-4 text-center marginbottom">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <h3>Call Us</h3>
                <h4>888 888 8888</h4>
              </div>
              <div className="col-sm-4 text-center marginbottom">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <h4>info@epicdl.com</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" style={{backgroundColor : "#101010"}}>
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1>CONTACT FORM</h1>
                <h2>WRITE US TO GET CONNECTED</h2>
                <hr />
              </div>
            </div>
            <form method="POST" className="validate-form">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="ktwnKWEm7mEguPtzoEoaST4l9u4vBArZvn2eB3ml446ONDyYJjxKRLeBJHobtXCN"
              />
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact-input"
                      placeholder="Enter name here"
                      name="first_name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact-input"
                      placeholder="Enter last name here"
                      name="last_name"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="contact-input"
                      placeholder="Enter email here"
                      name="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Phone Number
                      <span className="text-muted">
                        {" "}
                        &nbsp; xxx xxx xxxx or +xxx xxx xxxx
                      </span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact-input"
                      placeholder="Enter phone number here"
                      name="ph_no"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Message <span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="contact-textarea"
                      rows="3"
                      placeholder="Type your message..."
                      name="typed_message"
                      required=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group text-center">
                    <button type="submit" className="button btn-signup btn-lg">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Contact;
