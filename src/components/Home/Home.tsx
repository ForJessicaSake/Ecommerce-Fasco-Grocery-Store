import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import Header from "../header/Header";
import Product from "../products/Product";
const Home = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Banner2 />
      <Product />
      <Banner />
    </div>
  );
};

export default Home;
