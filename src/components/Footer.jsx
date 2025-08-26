import React from "react";
import { FaHome } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="mt-10 flex justify-center pb-4 lg:mt-25 lg:pb-9">
            <ul className="flex gap-4 lg:gap-12">
              <li className="text-primary-white font-regular hover:text-secondery flex items-center justify-center gap-[10px] text-[18px]">
                <FaHome />
                <Link to="/">Home</Link>
              </li>
              <li className="text-primary-white font-regular hover:text-secondery flex items-center justify-center gap-[10px] text-[18px]">
                <IoPersonOutline />
                <Link to="/About">About me</Link>
              </li>
              <li className="text-primary-white font-regular hover:text-secondery flex items-center justify-center gap-[10px] text-[18px]">
                <BsPersonWorkspace />
                <Link to="/recent">Work</Link>
              </li>
              <li className="text-primary-white font-regular hover:text-secondery flex items-center justify-center gap-[10px] text-[18px]">
                <FaYoutube />
                <Link to="/Contract">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-6 pb-12 lg:pb-[92px]">
            <button className="footerbtn">
              <a href="#">
                <FiFacebook />
              </a>
            </button>
            <button className="footerbtn">
              <a href="#">
                <FaInstagram />
              </a>
            </button>
            <button className="footerbtn">
              <a href="#">
                <FaTwitter />
              </a>
            </button>
            <button className="footerbtn">
              <a href="#">
                <FiFacebook />
              </a>
            </button>
          </div>
          <h3 className="text-primary-white/75 font-regular pb-12 text-end text-[18px]">
            Terms of Service - Privacy Policy
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
