import React, { useState } from "react";
import AboutImage from "../assets/images/aboutimage.png";
const About = () => {
  const [readmore, setReadmore ]=useState(false);
  const handleReadToggle =() =>{
    setReadmore(!readmore)
  };
  return (
    <>
      <section className="border-primary-white/10 border-b">
        <div className="container">
          <div className="mt-[20px] flex flex-col lg:mt-[230px] lg:flex-row">
            <div className="lg:w-2/4">
              <div>
                <h2 className="text-primary-white text-[48px] font-bold lg:mt-[26px] lg:text-[64px]">
                  About <span className="text-secondery">me</span>
                </h2>
                <p className="text-primary-white w-auto font-normal lg:w-[389px] lg:text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis....{" "}
                  <span onClick={handleReadToggle} className="font-bold">{!readmore && "Read more"}</span>
                  {readmore && (
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium rem quod molestiae! Culpa corrupti, magnam laboriosam ullam fugiat eos perferendis ipsum quaerat ad amet sequi nostrum sapiente labore voluptates, aliquam quod, facilis beatae asperiores enim quo exercitationem sit natus. Voluptatem, consequuntur doloribus! Vero, repellat consequuntur! Beatae ab qui earum!
                  </p>                  
                  )}
                  <span onClick={handleReadToggle} className="font-bold">{readmore && "Less more"}</span>
                </p>
              </div>
            </div>
            <div className="lg:w-2/4">
              <div>
                <img
                  className="mb-[69px] w-full"
                  src={AboutImage}
                  alt="aboutimage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
