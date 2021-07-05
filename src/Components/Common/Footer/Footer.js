import React, { Fragment } from "react";
import Footer_content from "./Footer_content";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Footer_content/>,
        document.getElementById("footer_main")
      )}
    </Fragment>
  );
};

export default Footer;
