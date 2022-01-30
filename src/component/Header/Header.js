import React, { useEffect } from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "aos/dist/aos.css";
import Aos from "aos";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="home" className="header">
      <div className="header-two">
        <div className="one">
          <h1 data-aos="fade-down">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
          <p data-aos="fade-right">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className="input-header">
            <input type="email" placeholder="Your Email" />
            <button className="btn-email">Get Started</button>
          </div>
          <div className="people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <img data-aos="zoom-in" className="ai" src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
