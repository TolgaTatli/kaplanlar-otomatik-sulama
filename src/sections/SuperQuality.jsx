import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into sophistication with Super Quality Shoes. Unmatched
          craftsmanship, timeless style. Elevate every step. Luxurious
          materials, meticulous design. Comfort meets elegance effortlessly.
          From boardroom to casual chic, find your perfect pair.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Super Quality - where style meets substance. Precision and durability
          in every step. Upgrade to the extraordinary. Make a statement with
          every stride. SuperQuality Shoes: Because your style deserves the
          best.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8"
        width={570}
        height={522} 
        className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
