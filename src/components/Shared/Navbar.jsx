// Navbar.jsx
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#01204E] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">Logo</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
          <a href="#" className="text-white ml-auto">Sign In</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <Menu as="div" className="md:hidden">
          <Menu.Items static className="bg-blue-600 p-4 space-y-4">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block text-white ${active ? 'bg-blue-700' : ''}`}
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block text-white ${active ? 'bg-blue-700' : ''}`}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block text-white ${active ? 'bg-blue-700' : ''}`}
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block text-white ${active ? 'bg-blue-700' : ''}`}
                >
                  Contact
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block text-white ${active ? 'bg-blue-700' : ''}`}
                >
                  Sign In
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </nav>
  );
};

export default Navbar;
