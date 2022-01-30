import React, { useEffect } from "react";
import "./Feature.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Feature() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="feature">
      <div className="features">
        <div data-aos="fade-right" className="satu">
          <h1>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div data-aos="fade-up" className="dua">
          <div className="list">
            <div className="garis"></div>
            <h1>Improving end distrusts instantly</h1>
          </div>
          <div className="list">
            <div className="garis"></div>
            <h1>Become the tended active</h1>
          </div>
          <div className="list">
            <div className="garis"></div>
            <h1>Message or am nothing</h1>
          </div>
          <div className="list">
            <div className="garis"></div>
            <h1>Really boy law county</h1>
          </div>
        </div>
        <div data-aos="fade-left" className="tiga">
          <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
          <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
          <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
          <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
