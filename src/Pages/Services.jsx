import React from "react";
import Cards from "../Components/Common/Cards";
import { NavLink } from "react-router-dom";
import Sdata from "../Data/Sdata";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <Cards
                    key={index}
                    title={val.title}
                    content={val.content}
                    btn="Go somewhere"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
