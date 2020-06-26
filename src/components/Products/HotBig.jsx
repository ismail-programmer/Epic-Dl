import React, { Component } from 'react';
import { Link } from "react-router-dom";

//images
import HotBigImg from "../../resources/images/hot-storage-big.png";

class HotBig extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src={HotBigImg} alt="Hot Storage" />
              </div>
              <div className="col-sm-6">
                <h3>HOT STORAGE</h3>
                <p className="light">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip.
                </p>
                <Link to="products.html">
                  <button type="button" className="button btn-learn btn-sm">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>

        );
    }
}

export default HotBig;