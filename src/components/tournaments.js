import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Sample tournament data
const tournamentsData = [
  { id: 1, name: 'World Cup 2023', date: '2023-10-05', format: 'ODI' },
  { id: 2, name: 'T20 World Series', date: '2024-02-20', format: 'T20' },
  { id: 3, name: 'Test Championship Final', date: '2024-06-15', format: 'Test' },
  { id: 4, name: 'IPL 2024', date: '2024-03-25', format: 'T20' },
  { id: 5, name: 'Ashes Series 2024', date: '2024-07-01', format: 'Test' },
  { id: 6, name: 'Asia Cup 2024', date: '2024-09-15', format: 'ODI' },
  { id: 7, name: 'Champions Trophy 2025', date: '2025-05-10', format: 'ODI' },
  { id: 8, name: 'Caribbean Premier League 2024', date: '2024-08-01', format: 'T20' },
  { id: 9, name: 'Big Bash League 2024', date: '2024-12-10', format: 'T20' },
  { id: 10, name: 'Pakistan Super League 2025', date: '2025-02-15', format: 'T20' },
];

const formatImages = {
  T20: 'https://www.shutterstock.com/image-photo/cricket-bat-ball-hitting-wicket-260nw-2254737171.jpg',
  ODI: 'https://www.shutterstock.com/image-illustration/white-leather-stitched-odi-cricket-260nw-2455944321.jpg',
  Test: 'https://i.pinimg.com/736x/1b/8e/6d/1b8e6d43c919f57c1da9830257194df8.jpg',
};

const TournamentCard = ({ name, date, format }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/register"); // Change this to your desired route
    }, 3000);
  };

  return (
    <motion.div
      className="bg-white text-black border border-gray-300 p-6 rounded-lg shadow-lg mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 relative w-96"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
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
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <motion.img
          src={formatImages[format]}
          alt={`${format} Icon`}
          className="w-20 h-20 border-4 border-gray-200 rounded-full"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        />
      </div>
      <div className="flex flex-col items-start mt-16">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-base text-gray-700 mb-1">{date}</p>
        <p className="text-base font-medium mb-4">{format}</p>
        <motion.button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 text-sm"
          onClick={handleButtonClick}
        >
          Register to Tournament
        </motion.button>
      </div>
    </motion.div>
  );
};

const Tournaments = () => (
  <div className="p-8 min-h-screen">
    <h2 className="font-semibold text-center text-[#316685] mb-10" style={{ fontSize: '36px' }}>
      Cricket Tournaments
    </h2>

    <div className="flex flex-wrap justify-center gap-6">
      {tournamentsData.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          name={tournament.name}
          date={tournament.date}
          format={tournament.format}
        />
      ))}
    </div>
  </div>
);

export default Tournaments;
