import Faqs from "./components/FAQs";
import Hero from "./components/Hero";
import HowToPay from "./components/HowToPaySection";
import HowTo from "./components/HowToSection";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <HowTo/>
      <HowToPay/>
      <Faqs/>
    </>
  );
}
