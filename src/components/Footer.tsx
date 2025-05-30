
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      {/* Footer Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 font-medium">Footer Ad Placement</p>
          {/* Place Ad Code Here */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* EnderHOST promotion section */}
        <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Minecraft Server Hosting?</h3>
          <p className="text-gray-600 mb-4">Check out EnderHOST - Premium Minecraft server hosting with 24/7 support</p>
          <a
            href="https://www.enderhost.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit EnderHOST
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 font-medium">Made by Utilitix, Powered by EnderHOST</p>
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
            © 2024 Utilitix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
