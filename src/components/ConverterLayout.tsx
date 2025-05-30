
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ConverterLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ConverterLayout = ({ title, description, children }: ConverterLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {children}
          </div>
          
          {/* Sidebar Ad Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center sticky top-24">
              <p className="text-gray-500 font-medium mb-2">Sidebar Ad</p>
              <p className="text-sm text-gray-400">300x600</p>
              {/* Place Ad Code Here */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConverterLayout;
