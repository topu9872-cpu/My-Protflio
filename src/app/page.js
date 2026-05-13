// Import your section components here
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";

import AboutMe from "@/components/AboutMe/AboutMe";
import BannerPage from "@/components/banner/BannerPage";
import Cards from "@/components/CardSection/Cards";
import InteractiveCourseForm from "@/components/Contact/Contact";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import TechStack from "@/components/Marquee/TechStack";
import Navbar from "@/components/NavBar/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <div>
        <Navbar />
        <section id="home" className="min-h-screen pt-10 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

          <BannerPage />
        </section>
        <section id="about" className="min-h-screen px-4 max-w-7xl mx-auto scroll-mt-20">
          <AboutMe />
        </section>
        <TechStack />

        <section id="projects" className="min-h-screen text-center px-4 max-w-7xl mx-auto scroll-mt-20">

          <Cards />
        </section>

        <section id="contact" className="min-h-screen  px-4 text-center max-w-7xl mx-auto scroll-mt-20">

          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}