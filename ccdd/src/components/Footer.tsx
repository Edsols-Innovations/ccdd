import logo from '../assets/images/logo.png';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <p className="text-gray-400">
              Dedicated to providing exceptional care and support for child development and disabilities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>080 4120-5034 / 080 2334-2035</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>ccddnandini@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>
                  No. 6, Chitrapur Bhavan, 8th Main, 15th Cross,
                  Malleswaram, Bengaluru, Karnataka, India- 560055
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright (Centered) & Powered by Edsols (Right-Aligned) */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center relative">
          {/* Centered Copyright Text */}
          <p className="text-gray-400 text-sm absolute left-1/2 transform -translate-x-1/2">
            &copy; {new Date().getFullYear()} Centre for Child Development And Disabilities. All rights reserved.
          </p>

          {/* Right-aligned Edsols Link */}
          <p className="text-gray-400 text-sm ml-auto">
            Powered by{' '}
            <a
              href="http://www.edsols.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-blue-400 transition"
            >
              Edsols
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
