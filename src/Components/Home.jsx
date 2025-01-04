import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import Footer from "./Footer";
import Work from "./Work";

const Home = () => {
  return (
    <>
    <div className="home-container">
        <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="primary-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet eaque eos unde, quam rem recusandae.
          </p>
            <Link to={"/products"}>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
          <Work />
      <Footer /></>
  );
};

export default Home;
