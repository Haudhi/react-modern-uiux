import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Article from "./component/Article/Article";
import Brand from "./component/Brand/Brand";
import Cta from "./component/Cta/Cta";
import Feature from "./component/Feature/Feature";
import Header from "./component/Header/Header";
import What from "./component/What/What";
import Posibi from "./component/Posibi/Posibi";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Feature />
      <Posibi />
      <Cta />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
