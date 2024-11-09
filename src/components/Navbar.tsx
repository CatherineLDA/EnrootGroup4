import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#4bc0c8] to-[#ffb347] text-white sticky top-0 px-5 z-50 shadow-xl h-16">

      <div className="flex justify-between items-center w-full h-full">
        <Link to="/">
          <span className="font-bold text-xl">🎨 TOTE-ally Yours</span>
        </Link>
        
        {/* Mobile menu toggle button */}
        <button 
          className="sm:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        {/* Navbar links */}
        <div className={`flex-col sm:flex sm:flex-row sm:items-center sm:space-x-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#4c6ef5] sm:bg-transparent text-white ${isOpen ? "block" : "hidden"} sm:block`}>
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-2 px-4 text-center font-semibold bg-transparent hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200 ease-in-out">Home</button>
          </Link>
          <Link to="/tote-gallery" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-2 px-4 text-center font-semibold bg-transparent hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200 ease-in-out">Tote Bag Designs</button>
          </Link>
          <Link to="/event-photos" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-2 px-4 text-center font-semibold bg-transparent hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-200 ease-in-out">Event Photos</button>
          </Link>
          <a 
            href="https://forms.office.com/r/MRvqsMkQjD"
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto py-2 px-4 text-center text-gray-800 font-semibold bg-white rounded-lg transition duration-200 ease-in-out">Vote Now!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;