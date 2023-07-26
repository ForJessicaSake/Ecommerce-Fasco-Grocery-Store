import Card from "../../micro/product/Card";

export type FruitItem = {
  fruit: string;
  price: string;
  image: string;
};

const Fruits: FruitItem[] = [
  {
    fruit: "grape",
    price: "16",
    image: "/store/grape.jpeg",
  },
  {
    fruit: "strawberry",
    price: "10",
    image: "/store/strawberry.jpeg",
  },
  {
    fruit: "mango",
    price: "2",
    image: "/store/mango.jpeg",
  },
  {
    fruit: "avocardo",
    price: "3",
    image: "/store/avocardo.jpeg",
  },
  {
    fruit: "watermelon",
    price: "5",
    image: "/store/watermelon.jpeg",
  },
  {
    fruit: "banana",
    price: "3",
    image: "/store/bananas.jpeg",
  },
  {
    fruit: "tomato",
    price: "9",
    image: "/store/tomato.png",
  },
  {
    fruit: "pineapple",
    price: "5",
    image: "/store/pineapple.jpeg",
  },
  {
    fruit: "milk",
    price: "10",
    image: "/store/milk.jpeg",
  },
  {
    fruit: "lemon",
    price: "4",
    image: "/store/lemon.png",
  },
  {
    fruit: "grape",
    price: "12",
    image: "/store/grape (2).jpeg",
  },
  {
    fruit: "apple",
    price: "8",
    image: "/store/apple.png",
  },
];

const Product = () => {
  return (
    <main className="container mx-auto px-5 lg:px-10">
      <nav className="flex justify-between">
        <h1 className="text-3xl text-secondary font-semibold">
          Popular <span className="text-primary">Product</span>
        </h1>
        <ul className="justify-between md:flex hidden cursor-pointer space-x-10 font-medium text-gray-500">
          <li>All</li>
          <li>Milk</li>
          <li>Fruit</li>
          <li>Vegetable</li>
        </ul>
      </nav>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:place-content-center gap-10 pt-8">
        <Card fruits={Fruits} />
      </div>
    </main>
  );
};

export default Product;
