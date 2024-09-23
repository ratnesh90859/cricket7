import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamFormPage1 = () => {
  const [formData, setFormData] = useState({
    tname: "",
    taddress: "",
    captname: "",
    phone: "",
    logo: ""
  });
  
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          logo: reader.result
        });
      };
      reader.readAsDataURL(file); // Convert image to base64 string
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    localStorage.setItem("teamFormData", JSON.stringify(formData));
    setTimeout(() => {
      setLoading(false); 
      navigate("/register/page2"); 
    }, 3000); 
  };

  return (
    <div className="container mx-auto p-4">
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
      <div className="max-w-md mx-auto"> {/* Centered the form container and restricted width */}
        <h2 className="text-xl font-semibold mb-4 text-center" style={{ fontSize: "36px" }}>Register Your Team</h2> {/* Centered the title */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Team Name</label>
            <input
              type="text"
              name="tname"
              value={formData.tname}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" // Adjusted width
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Team Address</label>
            <input
              type="text"
              name="taddress"
              value={formData.taddress}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" // Adjusted width
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Captain's Name</label>
            <input
              type="text"
              name="captname"
              value={formData.captname}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" // Adjusted width
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Team Logo</label> {/* Updated label */}
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm" 
            />
          </div>

          <button
            type="submit"
            className="bg-[#1f5156] text-white px-20 py-4 rounded-md hover:bg-[#1f5156] hover:scale-105 transition duration-300 ease-in-out text-sm" 
          >
            Next
          </button>
        </form><br/>
      </div>
    </div>
  );
};

export default TeamFormPage1;
