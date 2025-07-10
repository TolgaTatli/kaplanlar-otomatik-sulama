import React from "react";
import { KaplanlarCollage1, offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = ({
  name,
  description,
  descriptionSub,
  descriptionEnd,
  image,
}) => {
  return (
    <section
      className="flex justify-wrap
      items-center 
      max-xl:flex-col-reverse
      gap-10 max-container"
      id="services"
    >
      <div className="flex-1">
        <img
          src={image}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg"
        >
          Otomatik
          <span className="text-coral-red"> {name} </span>
          Sulama
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">{description}</p>
        <p className="mt-6 lg:max-w-lg info-text">{descriptionSub}</p>
        <p className="mt-6 lg:max-w-lg info-text">{descriptionEnd}</p>

        <div className="mt-11 flex flex-wrap gap-4"></div>
      </div>
    </section>
  );
};

export default SpecialOffer;
