import React from "react";
import { Link } from "react-router-dom";
//import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from "react-social-icons";
import "./FooterPage.css";

function FooterPage() {
  return (
    <div className="footerpage">
      <div className="social-icons">
        <li className="li">
          <SocialIcon className="sa" url="http://twitter.com" />
        </li>
        <li className="li">
          <SocialIcon className="sa" url="http://facebook.com" />
        </li>
        <li className="li">
          <SocialIcon className="sa" url="http://instagram.com" />
        </li>
        <li className="li">
          <SocialIcon className="sa" url="http://pintrest.com" />
        </li>
      </div>

      <hr className="clearfix" />

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} All Copyright reserved by-
        <Link to="https://www.kv.com" className="link">
          {" "}
          kvgasyal.com{" "}
        </Link>
      </div>
    </div>
  );
}

export default FooterPage;
