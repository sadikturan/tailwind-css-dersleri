import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

export default function ProductListPage() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}
