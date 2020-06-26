import React, { Component } from "react";
// import { Link } from "react-router-dom";

//components
import Header from "../layout/Header";
import WarmBig from "./WarmBig";
import HotBig from "./HotBig";
import Footer from "../layout/Footer";
//images
// import costImg from "../../resources/images/cost.png";

class products extends Component {
  render() {
    return (
      <div>
        <Header
          text="Our Products"
          
          // bg="url('../../resources/images/contactBg.jpg') no-repeat center center fixed"
        />

        <section id="product-head">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 col-sm-12">
                <h1>EASY AND LOW COST</h1>
                <h2>Pricing Calculator</h2>
                <div className="col-sm-12">
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <form method="POST" className="text-center">
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    defaultValue="9wm14OCODLtRTWenCvQILnEMCFcffasBkqSSVVkNAtVpcKjMXaZiKfO2cSwV7xDp"
                  />
                  <div className="bg-black">
                    <h3 className="text-center mb-4">
                      Anycast DDoS Protection
                    </h3>
                    <select
                      name="transfer_rate"
                      className="form-control-sm"
                      required=""
                    >
                      <option hidden="" disabled="">
                        GBs of transfer{" "}
                      </option>
                    </select>
                    <h3 id="pkg_rate" className="form-control-sm btn bg-white">
                      Rate/GB
                    </h3>
                    {/* <!-- <h3 className="mt-3">Total Fee: <span id="ddos-total"></span></h3> --> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12">
                <h1>EASY AND LOW COST</h1>
                <h2>CLOUD STORAGE PRODUCTS</h2>
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
            </div>
          </div>

          <HotBig />
          <WarmBig />
        </section>
        <Footer />
      </div>
    );
  }
}

export default products;
