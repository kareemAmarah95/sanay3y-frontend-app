import React from "react";
import image from "../images/images.jpeg";
import "./CardSwiper.css";

const CardSwiper = () => {
  return (
    <div className="flex w-[90%] ">
      <div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full "
                src={image}
                alt="Modern building architecture"
              />
            </div>
            {/* details name, description , rating , phone-number */}
            <div className="text-left p-4">
              <div>
                <span>Name : </span>
                <span>John Doe</span>
              </div>
              <div>
                <span>Description : </span>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, sit!
                </span>
              </div>
              <div>
                <span>Rating : </span>
                <span>⭐​⭐​⭐​⭐​</span>
              </div>
              <div>
                <span>Phone Number : </span>
                <span>01053786357</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSwiper;
