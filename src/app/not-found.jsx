"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Floating background glow */}
      <div className="absolute w-72 h-72 bg-cyan-500 blur-[120px] opacity-30 rounded-full animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-500 blur-[120px] opacity-20 rounded-full bottom-10 right-10 animate-pulse" />

      <div className="text-center z-10 px-4">
        
        {/* BIG 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[120px] md:text-[180px] font-extrabold text-cyan-400 leading-none"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-3"
        >
          Oops! The page you are looking for doesn’t exist.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold shadow-lg"
          >
            Go Home
          </Link>
        </motion.div>
      </div>

      {/* floating dots */}
      <motion.div
        className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </div>
  );
}