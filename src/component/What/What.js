import React, { useEffect } from "react";
import "./What.css";
import "aos/dist/aos.css";
import Aos from "aos";

function What() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="wgpt3" className="what">
      <div className="inside">
        <div className="what-is">
          <div className="what-is-two">
            <div className="garis"></div>
            <h1 data-aos="fade-up-right">What is GPT-3</h1>
          </div>
          <p data-aos="fade-up-left">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so
            humanity he. Friendly bachelor entrance to on by.
          </p>
        </div>
        <div className="posi">
          <h1 data-aos="fade-right">The possibilities are beyond your imagination</h1>
          <p data-aos="fade-left">Explore the Library</p>
        </div>
        <div className="what-details">
          <div data-aos="fade-up-right" className="chatsbots">
            <div className="garis"></div>
            <h1>Chatbots</h1>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>
          <div data-aos="fade-up" className="chatsbots">
            <div className="garis"></div>
            <h1>Knowledgebase</h1>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
          <div data-aos="fade-up-left" className="chatsbots">
            <div className="garis"></div>
            <h1>Education</h1>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
