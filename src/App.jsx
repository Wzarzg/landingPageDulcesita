import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsappButton from "./components/sections/WhatsappButton";
import HeroSection from "./components/sections/HeroSection";
import ProductsSection from "./components/sections/ProductsSection";
import StorySection from "./components/sections/StorySection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      
      <main className="overflow-x-hidden">
        <HeroSection />

        <ProductsSection />

        <StorySection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;