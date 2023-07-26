import { Link } from "react-router-dom";
import hero from "../../assets/banner/landing.svg";
import Button from "../../micro/button/Button";
import {BsArrowRight} from "react-icons/bs"

const Hero = () => {
  return (
    <main className="mx-auto container px-5 pt-14 xl:pt-4 lg:px-10 flex lg:flex-row flex-col lg:justify-between justify-center items-center text-center lg:text-start">
      <div className="lg:w-7/12 w-full flex flex-col justify-center lg:justify-start lg:items-start items-center">
        <h1 className="xl:text-7xl lg:text-6xl text-5xl text-secondary lg:max-w-3xl font-bold">Shop <span className="text-primary">for</span> daily fruits & <span className="text-primary">vegetables</span></h1>
        <p className="max-w-lg font-medium text-secondary py-5 text-lg">
          Freshness and Speed at your Fingertips: Get groceries delivered in 30
          Minutes with our website or mobile app.
        </p>
        <Link to="/">
          <Button className="animate-bounce my-5 flex items-center p-3 w-64  rounded-md justify-center">
            Shop Now <BsArrowRight className="ml-3 text-xl" />
          </Button>
        </Link>      </div>
      <img src={hero} alt="fruit basket" className="xl:w-[543px] xl:h-[623px] w-[420px] h-[400px]" />
    </main>
  );
};
export default Hero;
