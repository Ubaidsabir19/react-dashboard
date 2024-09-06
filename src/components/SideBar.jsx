import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import { FaTachometerAlt, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const SideBar = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-slate-600 p-6 flex flex-col z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:w-64`}
      >
        {/* Sidebar Title */}
        <div className="flex items-start mb-6">
          <h2 className="text-xl font-bold text-white px-2">Turbo Racing</h2>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-4">
          <li
            className={`flex items-center text-white hover:text-blue-400 ${
              location.pathname === '/' ? ' text-black' : ''
            } p-3 rounded`}
          >
            <Link to="/" className="flex items-center w-full">
              <FaTachometerAlt className="mr-4" /> Dashboard
            </Link>
          </li>
          <li
            className={`flex items-center text-white hover:text-blue-400 ${
              location.pathname === '/players' ? ' text-black' : ''
            } p-3 rounded`}
          >
            <Link to="/players" className="flex items-center w-full">
              <FaUser className="mr-4" /> Players
            </Link>
          </li>
          <li
            className={`flex items-center text-white hover:text-blue-400 ${
              location.pathname === '/settings' ? ' text-black' : ''
            } p-3 rounded`}
          >
            <a href="#" className="flex items-center w-full">
              <FaCog className="mr-4" /> Settings
            </a>
          </li>
          <li
            className={`flex items-center text-white hover:text-blue-400 ${
              location.pathname === '/logout' ? ' text-black' : ''
            } p-3 rounded`}
          >
            <a href="#" className="flex items-center w-full">
              <FaSignOutAlt className="mr-4" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SideBar;
