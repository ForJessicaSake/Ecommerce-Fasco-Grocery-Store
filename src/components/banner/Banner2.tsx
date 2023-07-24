import Card from "../../micro/banner/Card";
import lime from "../../assets/banner/lime.jpeg"
import apple from "../../assets/banner/apple.png"
import lemon from "../../assets/banner/lemon.png"
const Banner2 = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-10 lg:py-20 px-5 lg:px-10 mx-auto container place-items-center">
      <Card image={lime} fruit="Vegetarian and vegan products"/>
      <Card image={lemon} fruit="Vegetables and fruits for a balanced diet"/>
      <Card image={apple} fruit="Delicious energy for every day"/>
    </div>
  );
};

export default Banner2;
