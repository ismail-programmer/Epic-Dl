import React, { Component } from 'react';
import { Link } from "react-router-dom";


//images
import HotImg from "../../resources/images/hot-storage.png";
import WarmImg from "../../resources/images/warm-storage.png";


class Products_2 extends Component {
  render() {
    return (
      <div>
           <section id="products">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center hot">
                <img src={HotImg} alt="Hot Storage" />
                <h3>HOT STORAGE</h3>
                <p className="light">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpa wisi enim.
                </p>
                <Link className="nav-item nav-link" to="sign-in.html">
                  <button type="button" className="button btn-signup btn-sm">
                    LEARN MORE
                  </button>
                </Link>
              </div>
              <div className="col-sm-6 text-center warm">
                <img src={WarmImg} alt="Warm Storage" />
                <h3>WARM STORAGE</h3>
                <p className="light">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpa wisi enim.
                </p>
                <Link className="nav-item nav-link" to="sign-in.html">
                  <button type="button" className="button btn-signup btn-sm">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Products_2;