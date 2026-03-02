import Navbar from "../Navbar";
import Hero from "../Hero";
import Categories from "../Categories";
import Courses from "../Courses";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import AboutFounder from "../foundermeet";

export default function HomeLandingPage() {
  return (
    <>
      <Navbar />
       <div className="main-content">
      <Hero />
      <Categories />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <AboutFounder />
      <Footer />
      </div>
    </>
  );
}