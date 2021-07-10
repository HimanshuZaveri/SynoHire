import React, { Fragment } from "react";
import FooterContent from "./FooterContent";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <FooterContent/>,
        document.getElementById("footer_main")
      )}
    </Fragment>
  );
};

export default Footer;
