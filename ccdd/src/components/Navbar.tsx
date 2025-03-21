import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-16 w-auto"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
            <Link to="/team" className="text-gray-600 hover:text-blue-600 transition">Team</Link>
            <Link to="/vlogs" className="text-gray-600 hover:text-blue-600 transition">Vlogs</Link>
            <Link to="/publications" className="text-gray-600 hover:text-blue-600 transition">Publications</Link>
            <Link to="/achievements" className="text-gray-600 hover:text-blue-600 transition">Achievements</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Team</Link>
            <Link to="/vlogs" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Vlogs</Link>
            <Link to="/publications" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Publications</Link>
            <Link to="/achievements" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Achievements</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


