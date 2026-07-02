import React from "react";
import { NavLink } from "react-router-dom";
import web from "../../assets/images/web.svg";

const Common = (props) => {
  return (
    <section id="header">
      <div className="container">
        <div className="row align-items-center gx-lg-5 gx-4">

          {/* Left Section */}
          <div className="col-lg-6 col-12 order-2 order-lg-1 header-content">
            <h1>
              {props.heading}
              <strong className="brand-name"> {props.brandName}</strong>
            </h1>

            <h2>{props.description}</h2>

            <div className="mt-4">
              <NavLink to={props.visit} className="btn-get-started">
                {props.btnName}
              </NavLink>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-12 order-1 order-lg-2 header-img">
            <img src={web} alt="Illustration" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Common;