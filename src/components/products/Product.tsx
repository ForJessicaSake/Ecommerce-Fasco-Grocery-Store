import Card from "../../micro/product/Card";
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
          <li>Pet foods</li>
          <li>Vegetable</li>
          <li>Fruits</li>
        </ul>
      </nav>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:place-content-center gap-10 pt-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Product;
