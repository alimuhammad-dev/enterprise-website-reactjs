import React from "react";
import web from "../.././assets/images/web.svg";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto mb-4">
        <div className="card h-100 shadow-sm">
          <img src={web} className="card-img-top" alt="Web Development" />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.title}</h5>

            <p className="card-text flex-grow-1">{props.content}</p>

            <NavLink to={props.link} className="btn btn-primary mt-auto">
              {props.btn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
