import PropTypes from 'prop-types'; 
import { useState } from 'react';
import { FaSearch, FaUser, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  //  handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // handle search input visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // search input visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="w-full bg-slate-700 h-20 flex items-center justify-between px-4">
      {/* Left side - Logo */}
      <h1 className="text-white font-bold">Turbo Racing</h1>

      {/* Right side - Icons and Sidebar Toggle */}
      <div className="flex items-center space-x-6 relative">

        {/* Sidebar Toggle Button (mobile only) */}
        <button onClick={toggleSidebar} className="text-white md:hidden">
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Search Icon or Close Icon with Input Field */}
        <div className="flex items-center relative">
          {isSearchOpen ? (
            <FaTimes 
              className="text-white text-xl cursor-pointer mr-2" 
              onClick={toggleSearch} 
            />
          ) : (
            <FaSearch 
              className="text-white text-xl cursor-pointer mr-2" 
              onClick={toggleSearch} 
            />
          )}

          {/* Search Input Field */}
          {isSearchOpen && (
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-52 bg-white text-gray-800 px-4 py-1 rounded-lg"
              autoFocus
              onBlur={() => setIsSearchOpen(false)} 
            />
          )}
        </div>

        {/* Circular Avatar Icon */}
        <div>
          <div
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown} 
          >
            <FaUser className="text-slate-700 text-xl" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <Link to="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaUser className="mr-2" /> Profile
              </Link>
              <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaCog className="mr-2" /> Settings
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaSignOutAlt className="mr-2" /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Header;
