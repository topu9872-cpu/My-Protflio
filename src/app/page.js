// Import your section components here
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";

import AboutMe from "@/components/AboutMe/AboutMe";
import BannerPage from "@/components/banner/BannerPage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

    
      <section id="home" className="min-h-screen pt-10 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
       
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
        
        </ScrollFloat>
        
      <BannerPage/>
      </section>

     
      <section id="about" className="min-h-screen px-4 max-w-7xl mx-auto scroll-mt-20">
        <ScrollFloat
          animationDuration={1}
          stagger={0.05}
          textClassName="text-4xl font-bold"
        >
        
        </ScrollFloat>
         <AboutMe/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 max-w-7xl mx-auto scroll-mt-20">
        <ScrollFloat
          animationDuration={1}
          stagger={0.05}
          textClassName="text-4xl font-bold"
        >
          My Work
        </ScrollFloat>
        {/* Your Project Cards Here */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <ScrollFloat
          animationDuration={1}
          stagger={0.05}
          textClassName="text-4xl font-bold"
        >
          Get In Touch
        </ScrollFloat>
      <Footer/>
      </section>
    </main>
  );
}