import Button from "../button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Card = () => {
  return (
    <div className="rounded-lg shadow-md h-96 max-w-full lg:max-w-[350px] p-5">
      <img src="" alt="fruit" className="" />
      <div className="space-y-3">
        <p className="font-light">Category</p>
        <h3 className="text-3xl text-secondary">Fruit Name</h3>
        <p>stars</p>
        <p className="font-light">Price per kg</p>

        <div className="py-3 flex justify-between">
          <p>$price</p>
          <Button className="my-5 flex items-center p-2 rounded-md justify-center">
            <AiOutlineShoppingCart className="mr-2" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
