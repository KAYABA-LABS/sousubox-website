import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Advantages from "./components/Advantages";
import Features from "./components/Features";
import Journey from "./components/Journey";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import JoinSusu from "./components/JoinSusu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Advantages />
      <JoinSusu />
      <Features />
      {/* <Journey /> */}
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Insights />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
