import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        < Providers>
        <Toaster/>
        <ToastContainer/>
          {children}
        </Providers>



      </body>
    </html>
  );
}