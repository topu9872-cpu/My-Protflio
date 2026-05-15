import { format } from "date-fns";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden bg-black">

    
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-600/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* 👤 About section */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I`m a passionate MERN stack developer who loves building modern,
            interactive, and smooth web experiences with clean UI and animations.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white hover:translate-x-2 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-white hover:translate-x-2 transition duration-300 cursor-pointer">
              Projects
            </li>
            <li className="hover:text-white hover:translate-x-2 transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Me</h2>

          <div className="flex gap-4 mt-4">

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:scale-125 hover:-translate-y-1 transition duration-300 cursor-pointer">
              🌐
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:rotate-12 hover:scale-125 transition duration-300 cursor-pointer">
              💼
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:scale-125 hover:shadow-lg transition duration-300 cursor-pointer">
              🐙
            </div>

          </div>
        </div>
      </div>

     
      <div className="relative z-10 border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        &copy; {`${format(new Date(), "yyyy")}`} Made with &hearts; by Mehedi Hasan Topu
      </div>

    </footer>
  );
};

export default Footer;