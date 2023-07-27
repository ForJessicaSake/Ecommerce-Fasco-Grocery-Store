import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Product from "../products/Product";
const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner />
      <Header />
      <Banner2 />
      <Product />
      {/* <Banner /> */}
    </div>
  );
};

export default Home;
