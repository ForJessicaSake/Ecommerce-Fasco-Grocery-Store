import React from "react";
import Button from "../../micro/button/Button";
import delivery from "../../assets/delivery/delivery.png";

const Delivery = () => {
  return (
    <main className="mx-auto container bg-[#e1f5fa] py-10">
      <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center lg:px-10 px-5">
        <div className="pt-8 md:pt-0 flex flex-col items-center md:items-start text-center md:text-start">
          <h1 className="sm:text-4xl text-2xl font-bold sm:max-w-xl max-w-sm">
            Stay home & get your daily needs from our shop
          </h1>
          <p className="py-4">Start You'r Daily Shopping with Fesco</p> 
          <Button className="my-2 p-3">Check out Now</Button>
        </div>
        <div>
          <img
            src={delivery}
            alt="delivery man"
            className="sm:max-w-sm md:max-w-[250px] lg:max-w-sm height=[150px] max-w-[250px]"
          />
        </div>
      </div>{" "}
    </main>
  );
};

export default Delivery;
