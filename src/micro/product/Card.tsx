import Button from "../button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FruitItem } from "../../components/products/Product";
import { RiStarSFill } from "react-icons/ri";

const Card = ({ fruits }: { fruits: FruitItem[] }) => {
  return (
    <>
      {fruits.map((fruit: FruitItem) => (
        <div className="rounded-lg shadow-md max-w-full lg:max-w-[350px] p-5">
          <img src={fruit.image} alt="fruit" className="w-56 h-56" />
          <div className="space-y-2 py-2">
            <h3 className="text-2xl text-secondary first-letter:uppercase font-semibold">
              {fruit.fruit}
            </h3>
            <div className="flex space-x-2 text-xl text-yellow-400">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill className="text-black"/>
              <RiStarSFill  className="text-black"/>
            </div>
            <p className="font-light">Price per kg</p>
            <div className=" flex text-lg justify-between items-center">
              <p className="font-medium text-lg"><span className="font-semibold">$</span>{fruit.price}.00</p>
              <Button className="my-5 flex items-center p-2 rounded-md justify-center">
                <AiOutlineShoppingCart className="mr-2" /> Add
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
