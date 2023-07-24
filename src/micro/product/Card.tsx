import Button from "../button/Button";

const Card = () => {
  return (
    <div className="rounded-lg shadow-md h-96 max-w-full lg:max-w-[300px] p-5">
      <img src="" alt="fruit" className="" />
      <div className="space-y-3">
        <p className="font-light">Category</p>
        <h3 className="text-3xl text-secondary">Fruit Name</h3>
        <p>stars</p>
        <p className="font-light">Price per kg</p>

        <div className="py-3 flex justify-between">
          <p>$price</p>
          <Button>cart icon Add</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
