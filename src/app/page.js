
// Import your section components here
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";

import Navbar from "@/components/NavBar/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        {/* Your Hero Content */}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-4xl font-bold">About Me</h2>
        {/* Your About Content */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-4xl font-bold">My Work</h2>
        {/* Your Project Cards */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        {/* Your Contact Form */}
      </section>
    </main>
  );
}