import Navbar from "../Navbar";
import Hero from "../Hero";
import Categories from "../Categories";
import Courses from "../Courses";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

export default function HomeLandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}