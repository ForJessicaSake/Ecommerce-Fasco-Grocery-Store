import Card from "../../micro/banner/Card";
import pineapple from "../../assets/banner/pineapple.jpeg"
import citrus from "../../assets/banner/citrus.jpeg"
import bananas from "../../assets/banner/bananas.jpeg"
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-10 lg:py-20 px-5 lg:px-10 mx-auto container place-items-center">
      <Card image={pineapple} fruit="Vegetarian and vegan products"/>
      <Card image={bananas} fruit="Vegetables and fruits for a balanced diet"/>
      <Card image={citrus} fruit="Delicious energy for every day"/>
    </div>
  );
};

export default Banner;
