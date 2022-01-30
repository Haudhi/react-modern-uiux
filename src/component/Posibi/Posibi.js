import React, { useEffect } from "react";
import possibilityImage from "../../assets/possibility.png";
import "./Posibi.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Posibi() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="posibi" id="posibi">
      <div className="posibi-image">
        <img data-aos="zoom-in" src={possibilityImage} alt="possibility" />
      </div>
      <div data-aos="fade-left" className="posibi-details">
        <h4 className="req">Request Early Access to Get Started</h4>
        <h1>
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className="or">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Posibi;
