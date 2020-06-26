import React, { Component } from "react";

//components
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Products2 from "./Products/products_2";
import WarmBig from "./Products/WarmBig";
import HotBig from "./Products/HotBig";

import Slider from "./Slider/index";

//images
import costImg from "../resources/images/cost.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Header text="" marginTop="-20%" />

        <section id="about">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1>WE ARE AN</h1>
                <h2>OBJECT STORAGE COMPANY</h2>
                <div className="col-sm-12">
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 contentborder-right text-justify rtl padrl45">
                <p>
                  IDC projects that the total amount of data will grow to 44
                  zettabytes by 2020, and 80 percent of that will be
                  unstructured content. To respond effectively, you face
                  critical data storage decisions. Your content is diverse –
                  requiring storage flexibility across private, dedicated and
                  public cloud. And the diverse ways you use your data is just
                  as important to consider as how you store it
                </p>
              </div>
              <div className="col-sm-6 padrl45">
                <h3>Welcome to</h3>
                <h4>
                  EPIC<span className="dl">DL</span>
                </h4>
                <h5>Hot Storage & Warm Storage</h5>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}

        <Products2 />

        <section id="hot-storage">
          <HotBig />
        </section>
        <section id="warm-storage">
          <WarmBig />
        </section>
        <section id="serve">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>We Serve</h1>
                <h2>
                  1,000,000 <span>Mbps.</span>
                </h2>
                <h3>Network Capacity</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="cloudian">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <h1>CLOUDIAN SAVES</h1>
                <h2>70% ON STROAGE COST</h2>
                <div className="col-sm-12">
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-center">
                <img src={costImg} alt="Cloudian Cost" />
              </div>
              <div className="col-lg-6 max440center">
                <h3>
                  <i className="fas fa-check"></i>30% Less Power/Space/Cooling
                </h3>
                <p>
                  Integrated data compression, erasure coding and high density
                  packaging reduce footprint.
                </p>
                <h3>
                  <i className="fas fa-check"></i>66% Less CapEx
                </h3>
                <p>
                  Industry standard hardware and modular architecture saves you
                  66% versus conventional storage.
                </p>
                <h3>
                  <i className="fas fa-check"></i>Up to 95% Less Management
                  Overhead
                </h3>
                <p>
                  Cloudian consolidates data to a single management environment,
                  regardless of the capacity. Integrated cloud lets you manage
                  on-prem and cloud storage as one.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
