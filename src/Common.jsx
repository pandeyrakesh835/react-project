import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/images.gif";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-flud nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-mid-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column d-lg-inline-block">
                  <h3>
                    {props.name}<br/> with
                    <strong className="brand-name">Pandey Technnical</strong>
                  </h3>
                  <h6 className="my-3">
                    we are team of telented devoloper making website
                  </h6>
                  <div className="my-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="imges" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
