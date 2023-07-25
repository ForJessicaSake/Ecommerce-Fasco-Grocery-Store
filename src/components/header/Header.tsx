import Button from "../../micro/button/Button";
import milk from "../../assets/banner/milk.png"
import citrus from "../../assets/banner/citrus2.png"

const Header = () => {
  return (
    <main className="flex lg:flex-row flex-col mx-auto container">
      <div className="flex lg:flex-row flex-col lg:text-start text-center justify-between items-center py-10 px-10 bg-blueShade lg:w-7/12">
        <div className="">
          <h1 className="text-secondary xl:text-5xl text-4xl font-bold lg:max-w-sm">Milk drink with vitamin D3</h1>
          <p className="py-5 text-lg">Up to 30% discount on your first order</p>
          <Button className="p-2 w-32">Order Now</Button>
        </div>
        <img src={milk} alt="milk" className="w-56 h-56" />
      </div>
      <div className="justify-between items-center px-10 bg-[#f2ebd9] lg:w-5/12 hidden lg:flex">
        <div>
          <h1 className="text-secondary xl:text-4xl text-2xl font-bold">Buy with free shipping</h1>
          <Button className="p-2 my-5 w-32">Shop Now</Button>
        </div>
        <img src={citrus} alt="orange" className="w-40 h-40" />
      </div>
    </main>
  );
};

export default Header;
