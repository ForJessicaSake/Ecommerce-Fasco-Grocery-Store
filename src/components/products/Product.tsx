import React from "react";
import Card from "../../micro/product/Card";

export type FruitItem = {
  fruit: string;
  category: string;
  quantity: number,
  price: string;
  image: string;
  id: number;
};

const Fruits: FruitItem[] = [
  {
    fruit: "grape",
    category: "Fruit",
    quantity: 1,
    price: "11",
    image: "/store/grape.jpeg",
    id: 1,
  },
  {
    fruit: "strawberry",
    category: "Fruit",
    quantity: 1,
    price: "10",
    image: "/store/strawberry.jpeg",
    id: 2,
  },
  {
    fruit: "mango",
    category: "Fruit",
    quantity: 1,
    price: "2",
    image: "/store/mango.jpeg",
    id: 3,
  },
  {
    fruit: "avocardo",
    category: "Fruit",
    quantity: 1,
    price: "4",
    image: "/store/avocardo.jpeg",
    id: 4,
  },
  {
    fruit: "watermelon",
    category: "Fruit",
    quantity: 1,
    price: "2",
    image: "/store/watermelon.jpeg",
    id: 5,
  },
  {
    fruit: "banana",
    category: "Fruit",
    quantity: 1,
    price: "3",
    image: "/store/bananas.jpeg",
    id: 6,
  },
  {
    fruit: "tomato",
    category: "Vegetable",
    quantity: 1,
    price: "6",
    image: "/store/tomato.png",
    id: 7,
  },
  {
    fruit: "pineapple",
    category: "Fruit",
    quantity: 1,
    price: "5",
    image: "/store/pineapple.jpeg",
    id: 8,
  },
  {
    fruit: "milk",
    category: "Milk",
    quantity: 1,
    price: "10",
    image: "/store/milk.jpeg",
    id: 9,
  },
  {
    fruit: "lemon",
    category: "Fruit",
    quantity: 1,
    price: "4",
    image: "/store/lemon.png",
    id: 10,
  },
  {
    fruit: "grape",
    category: "Fruit",
    quantity: 1,
    price: "9",
    image: "/store/grape (2).jpeg",
    id: 11,
  },
  {
    fruit: "apple",
    category: "Fruit",
    quantity: 1,
    price: "10",
    image: "/store/apple.png",
    id: 12,
  },
];

const Product = () => {
  const [fruitsArray, setFruitArray] = React.useState(Fruits);
  const handleFilter = (value: string) => {
    setFruitArray(
      Fruits.filter(
        (fruit) => fruit.category.toLowerCase() === value.toLowerCase()
      )
    );
  };

  return (
    <main className="container mx-auto px-5 lg:px-10" id="product">
      <nav className="flex justify-between">
        <h1  className="text-3xl text-secondary font-semibold">
          Popular <span className="text-primary">Product</span>
        </h1>
        <ul className="justify-between md:flex hidden cursor-pointer space-x-10 font-medium text-gray-500">
          <li onClick={() => setFruitArray(Fruits)}>All</li>
          <li onClick={() => handleFilter("fruit")}>Fruit</li>
          <li onClick={() => handleFilter("milk")}>Milk</li>
          <li onClick={() => handleFilter("vegetable")}>Vegetable</li>
        </ul>
      </nav>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:place-content-center gap-10 pt-8">
        <Card fruits={fruitsArray} />
      </div>
    </main>
  );
};

export default Product;
