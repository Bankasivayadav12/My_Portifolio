import Qualification from "../components/Qualification";
 
import HeaderSlider from "../components/HeaderSlider";
//import Navbar from "../components/Navbar";
import Services1 from "../components/Services1";
 
import ProductSection from "../components/Skills";
import Text from "../components/Text";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
       

      <div className="px-6 md:px-16 lg:px-32">
        <About/>
        <HeaderSlider />
        <div>
        <Qualification/>
        <ProductSection/>
        <Services1/>
        <Contact/>
        </div> 
      </div>
      <Text/>


    </div>
    
  );
}
