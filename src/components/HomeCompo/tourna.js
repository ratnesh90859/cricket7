import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Tourna = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Hook to navigate between routes

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tournaments = [
    {
      name: 'T20 Blast',
      date: 'June 15-30, 2023',
      teams: 8,
      image: 'https://i.pinimg.com/736x/0d/ef/34/0def34322b8d4304476b88cd976e5b10.jpg',
    },
    {
      name: 'ODI Championship',
      date: 'July 10-25, 2023',
      teams: 10,
      image: 'https://i.pinimg.com/736x/0d/ef/34/0def34322b8d4304476b88cd976e5b10.jpg',
    },
    {
      name: 'Test Series',
      date: 'August 5-30, 2023',
      teams: 4,
      image: 'https://i.pinimg.com/736x/0d/ef/34/0def34322b8d4304476b88cd976e5b10.jpg',
    },
  ];

  // Function to handle navigation with loading state
  const handleNavigation = (path) => {
    setLoading(true); // Show loading GIF
    setTimeout(() => {
      navigate(path); // Navigate to the specified path after 3 seconds
    }, 3000);
  };

  return (
    <section className="text-gray-600 body-font">
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
      <div className="container px-5 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full "
        >
          <h2 className="font-semibold mb-4 text-center text-[#316685] text-2xl md:text-3xl lg:text-4xl" style={{ fontSize: '36px' }}>Featured Tournaments</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
            Check out our upcoming cricket tournaments and join the excitement on the field!
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center -m-4"
        >
          {tournaments.map((tournament, index) => (
            <motion.div key={index} variants={itemVariants} className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
                className="flex rounded-lg bg-gray-100 p-6 flex-col transition-all duration-200"
              >
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="rounded mb-4 h-48 w-full object-cover"
                />
                <div className="flex items-center justify-center mb-3">
                  <h2 className="text-gray-900 text-lg font-medium text-center">{tournament.name}</h2>
                </div>
                <div className="flex-grow text-center">
                  <p className="leading-relaxed text-sm md:text-base">{tournament.date}</p>
                  <p className="leading-relaxed text-sm md:text-base">{tournament.teams} Teams</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="mt-3 text-green-500 inline-flex items-center cursor-pointer"
                    onClick={() => handleNavigation('/about')} // Navigate to /about
                  >
                    <span className="text-sm md:text-base">Learn More</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tourna;
