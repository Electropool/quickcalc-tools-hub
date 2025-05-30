
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      {/* Footer Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 font-medium">Footer Ad Placement</p>
          <!-- Place Ad Code Here -->
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 font-medium">Made by QuickCalc Tools</p>
            <p className="text-sm text-gray-500">Fast, accurate, and free conversion tools</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/support" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Support
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2024 QuickCalc Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
