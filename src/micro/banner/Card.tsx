import { BsArrowRight } from "react-icons/bs";
import Button from "../button/Button";
type Props = {
  fruit: string;
  image: string;
};

const Card = ({ fruit, image }: Props) => {
  return (
    <div className="flex shadow-md max-w-sm p-5 rounded-md">
      <div>
        <h1 className="text-lg text-seondary font-semibold">{fruit} </h1>
        <a href="/#product">
          <Button className="my-5 flex items-center p-2 rounded-md justify-center">
            Shop Now <BsArrowRight className="ml-3" />
          </Button>
        </a>
      </div>
      <img src={image} alt="fruit" className="w-32 h-32" />
    </div>
  );
};

export default Card;
