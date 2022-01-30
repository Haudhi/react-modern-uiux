import React from "react";
import "./Footer.css";
import gpt3Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <h1>
        Do you want to step in to the <br /> future before others
      </h1>
      <h3>Request Early Access</h3>
      <div className="footer-flex">
        <div className="footer-one">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <h4 className="copy">@2021 GPT-3. All rights reserved.</h4>
    </div>
  );
}

export default Footer;
