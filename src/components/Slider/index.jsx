import React, { Component } from "react";
import {Link} from 'react-router-dom'

import img1 from "../../resources/images/cS-1.jpg";
import img2 from "../../resources/images/cS-2.jpg";
import img3 from "../../resources/images/cS-3.jpg";

class Slider extends Component {
  
  render() {
    return (
      <section id="cover">
        <div className="mainslider">
          <div className="item">
            <div className="clearfix" style={{ width: "100%" }}>
              <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                <li>
                  <div className="row text-center headerrow">
                    <div className="col-sm-12">
                      <h1 className="headline">Cloud Object Storage 1</h1>
                    </div>
                    <div className="col-sm-12">
                      <hr />
                    </div>
                    <div className="col-sm-12">
                      <p>
                        Respond rapidly to dynamic data storage needs with an
                        advanced, reliable object storage platform
                      </p>
                    </div>

                    <div className="col-sm-12">
                      <a href="signup/index.html">
                        <button type="button" className="button btn-signup btn-lg">
                          SIGN UP NOW
                        </button>
                      </a>
                    </div>
                  </div>
                  <img alt="" width="100%" height="100%" src={img1} />
                </li>
                <li>
                  <div className="row text-center headerrow">
                    <div className="col-sm-12">
                      <h1 className="headline">Cloud Object Storage 2</h1>
                    </div>
                    <div className="col-sm-12">
                      <hr />
                    </div>
                    <div className="col-sm-12">
                      <p>
                        Respond rapidly to dynamic data storage needs with an
                        advanced, reliable object storage platform
                      </p>
                    </div>

                    <div className="col-sm-12">
                      <a href="signup/index.html">
                        <button type="button" className="button btn-signup btn-lg">
                          SIGN UP NOW
                        </button>
                      </a>
                    </div>
                  </div>
                  <img alt="" width="100%" height="100%" src={img2} />
                </li>
                <li>
                  <div className="row text-center headerrow">
                    <div className="col-sm-12">
                      <h1 className="headline">Cloud Object Storage 3</h1>
                    </div>
                    <div className="col-sm-12">
                      <hr />
                    </div>
                    <div className="col-sm-12">
                      <p>
                        Respond rapidly to dynamic data storage needs with an
                        advanced, reliable object storage platform
                      </p>
                    </div>

                    <div className="col-sm-12">
                      <Link to="/signup">
                        <button type="button" className="button btn-signup btn-lg">
                          SIGN UP NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                  <img alt="" width="100%" height="100%" src={img3} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
