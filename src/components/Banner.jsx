import React, { useState } from "react";
import BannerImage from "../assets/images/bannerimage.png";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  let [activenumber, setActive] = useState(1)
  const handleActive = (number) =>{
    setActive(number);
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="text-center lg:w-2/4 lg:text-left">
              <h1 className="text-primary-white mt-[80px] text-5xl font-bold lg:mt-[202px] lg:text-8xl lg:leading-24">
                CREATIVE UI <span className="text-secondery">DESIGNER</span>
              </h1>
              <div className="mt-4 flex justify-center gap-3 lg:mt-12 lg:justify-start">
                <button onClick={()=>handleActive(1)} className={`${activenumber == 1 ? "bg-secondery text-primary-white py-2.5 px-4 lg:px-8 rounded-full lg:text-lg font-bold btn" : "button"}`}>Hire me</button>
                <button onClick={()=>handleActive(2)} className={`${activenumber == 2 ? "bg-secondery text-primary-white py-2.5 px-4 lg:px-8 rounded-full lg:text-lg font-bold hover:bg-secondery" : "button"}`}>
                  Download CV <FiDownload className="inline"/>
                </button>
              </div>
            </div>
            <div className="lg:w-2/4">
              <img
                className="mb-[70px] ml-auto"
                src={BannerImage}
                alt="bannerimage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
