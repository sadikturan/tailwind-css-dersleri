import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
