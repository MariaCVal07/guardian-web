import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import RBQEFramework from "@/components/sections/rbqe-framework";
import Services from "@/components/sections/services";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <RBQEFramework />
      <Services />
      <CTA />
      <Footer />
    </>
  );
}