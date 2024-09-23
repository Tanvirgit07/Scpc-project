import DemoCarousel from "@/Components/Carousel/DemoCarousel";
import Discount from "@/Components/Discount/Discount";
import Feedback from "@/Components/Feedback/Feedback";
import Menu from "@/Components/MenuSection/Menu";
import Navbar from "@/Components/Navbar/Navbar";
import NewProducts from "@/Components/NewProducts/NewProducts";
import Product from "@/Components/product/product";
import Recommended from "@/Components/Recommended/Recommended";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="">
        <DemoCarousel></DemoCarousel>
      </div>
      <div>
        <Menu></Menu>
      </div>
      <div>
        <Product></Product>
      </div>
      <div>
        <Recommended></Recommended>
      </div>

      <div>
        <Discount></Discount>
      </div>
      <div>
        <NewProducts></NewProducts>
      </div>
      <div>
        <Feedback></Feedback>
      </div>
    </div>
  );
}
