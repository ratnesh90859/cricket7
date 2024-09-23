"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TextGenerateEffect } from "../ui/text-generate-effect";

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  hidden: { opacity: 0, y: 20 },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.6 } },
};

export function TypewriterEffectDemo() {
  const words = [
    { text: "Experience ", className: "text-white dark:text-blue-500" },
    { text: "the ", className: "text-white dark:text-blue-500" },
    { text: "Thrill ", className: "text-white dark:text-blue-500" },
    { text: "of Cricket ", className: "text-white dark:text-blue-500" },
    { text: "with ", className: "text-white dark:text-blue-500" },
    { text: "CRICKO ", className: "text-blue-500 dark:text-blue-500" },
    { text: "Organization", className: "text-blue-500 dark:text-blue-500" },
  ];

  return <TypewriterEffect words={words} />;
}

const HeroSection = () => {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const words = `Join us for exciting cricket tournaments in various formats. Whether
  you're a player or a fan, we've got something for everyone. Discover
  the passion, skill, and excitement of cricket with CRICKO Organization.`;

  
  const handleNavigation = (path) => {
    setLoading(true); 
    setTimeout(() => {
      navigate('/about'); 
    }, 3000);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative text-gray-600 body-font flex items-center justify-center bg-cover bg-center h-[70vh] md:h-[65vh] lg:h-[60vh]"
      style={{
        backgroundImage:
          "url('https://www.fabhotels.com/blog/wp-content/uploads/2023/04/adelaide-oval.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Loading GIF overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <video
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/cricket-ticket-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--spectator-pass-event-match-pack-sports-games-icons-8805874.mp4"
            autoPlay
            loop
            muted
            className="h-40 w-40"
          />
        </div>
      )}
      <div className={`absolute inset-0 ${loading ? "bg-transparent" : "bg-black bg-opacity-60"}`}></div>
      <div className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col items-center text-center">
        {!loading && (
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
            <TypewriterEffectDemo />
            <p className="text-white text-sm sm:text-md md:text-lg leading-relaxed max-w-2xl mb-6">
              <TextGenerateEffect duration={2} filter={false} words={words} />
            </p>
            {/* Buttons for navigation */}
            <div className="flex justify-center space-x-4 mt-6">
              <motion.button
                whileHover="hover"
                variants={buttonVariants}
                onClick={() => handleNavigation("/about")}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Explore Tournaments
                </span>
              </motion.button>
              <motion.button
                whileHover="hover"
                variants={buttonVariants}
                onClick={() => handleNavigation("/contact")}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact Us
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default HeroSection;
