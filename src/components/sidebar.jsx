import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileAlt, faCog, faChartLine, faKey, faBell } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="text-3xl p-2 fixed top-4 left-4 z-50 md:hidden" 
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <div className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}>
        <button 
          className="text-3xl p-2 absolute top-4 right-4 md:hidden" 
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <div className="mt-16">
          <div>
            <div className="py-2.5 px-4 text-gray-400 uppercase">General</div>
            <div className='ml-20'>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Dashboard
              </a>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Documents
              </a>
            </div>
          </div>

          <div>
            <div className="py-2.5 px-4 text-gray-400 uppercase mt-4">Settings</div>
            <div className='ml-20'>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Performance
              </a>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faCog} className="mr-2" /> API Setting
              </a>
            </div>
          </div>

          <div>
            <div className="py-2.5 px-4 text-gray-400 uppercase mt-4">Security</div>
            <div className='ml-20'>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faKey} className="mr-2" /> Security
              </a>
              <a href="#" className="flex items-center py-2.5 px-4 hover:bg-gray-700 transition duration-200">
                <FontAwesomeIcon icon={faBell} className="mr-2" /> Alert
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
