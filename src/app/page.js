import DemoCarousel from "@/Components/Carousel/DemoCarousel";
import Discount from "@/Components/Discount/Discount";
import Menu from "@/Components/MenuSection/Menu";
import Navbar from "@/Components/Navbar/Navbar";
import NewProducts from "@/Components/NewProducts/NewProducts";
import Product from "@/Components/product/product";

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
        <NewProducts></NewProducts>
      </div>
      <div>
        <Discount></Discount>
      </div>
    </div>
  );
}
