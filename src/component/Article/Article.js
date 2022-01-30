import React, { useEffect } from "react";
import "./Article.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "aos/dist/aos.css";
import Aos from "aos";

function Article() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="blog" className="article">
      <h1 data-aos="fade-right">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="article-flex">
        <div data-aos="zoom-in" className="blog-one">
          <img src={blog01} alt='blog1' />
          <p>Sep 26, 2021</p>
          <h3>
            GPT-3 and Open AI is the future. <br /> Let us exlore how it is?
          </h3>
          <p className="read-one">Read Full Article</p>
        </div>
        <div className="blog-two">
          <div data-aos="zoom-in" className="blog">
            <img src={blog02} alt='blog2' />
            <p>Jan 29, 2022</p>
            <h3>
              GPT-3 and Open AI is the future. <br /> Let us exlore how it is?
            </h3>
            <p className="read">Read Full Article</p>
          </div>
          <div data-aos="zoom-in" className="blog">
            <img src={blog03} alt='blog3' />
            <p>Jan 29, 2022</p>
            <h3>
              GPT-3 and Open AI is the future. <br /> Let us exlore how it is?
            </h3>
            <p className="read">Read Full Article</p>
          </div>
        </div>
        <div className="blog-two">
          <div data-aos="zoom-in" className="blog">
            <img src={blog04} alt='blog4' />
            <p>Jan 29, 2022</p>
            <h3>
              GPT-3 and Open AI is the future. <br /> Let us exlore how it is?
            </h3>
            <p className="read">Read Full Article</p>
          </div>
          <div data-aos="zoom-in" className="blog">
            <img src={blog05} alt='blog5' />
            <p>Jan 29, 2022</p>
            <h3>
              GPT-3 and Open AI is the future. <br /> Let us exlore how it is?
            </h3>
            <p className="read">Read Full Article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
