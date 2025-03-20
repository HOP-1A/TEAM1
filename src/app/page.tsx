import Category from "@/app/_components/Category";
import NavBar from "../components/ui/navigationBar/NavBar";
import Product from "@/app/_components/Product";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Category />
      <Product />
      <Footer />
    </>
  );
}
