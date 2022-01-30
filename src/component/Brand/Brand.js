import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./Brand.css";

const Brand = () => (
  <div className="gpt3__brand">
    <div>
      <img src={google} alt='google' />
    </div>
    <div>
      <img src={slack} alt='slack' />
    </div>
    <div>
      <img src={atlassian} alt='atl' />
    </div>
    <div>
      <img src={dropbox} alt='dropbox' />
    </div>
    <div>
      <img src={shopify} alt='shopify' />
    </div>
  </div>
);

export default Brand;
