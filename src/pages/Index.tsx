
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const conversionTools = [
  {
    title: "Length/Distance Converter",
    description: "Convert between meters, feet, inches, kilometers and more",
    path: "/length",
    icon: "📏",
    color: "bg-blue-500 hover:bg-blue-600"
  },
  {
    title: "Area Converter", 
    description: "Convert square meters, acres, hectares and more",
    path: "/area",
    icon: "📐",
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    title: "Volume Converter",
    description: "Convert liters, gallons, cubic meters and more", 
    path: "/volume",
    icon: "🥤",
    color: "bg-purple-500 hover:bg-purple-600"
  },
  {
    title: "Weight/Mass Converter",
    description: "Convert kilograms, pounds, ounces and more",
    path: "/weight", 
    icon: "⚖️",
    color: "bg-orange-500 hover:bg-orange-600"
  },
  {
    title: "Temperature Converter",
    description: "Convert Celsius, Fahrenheit, Kelvin and more",
    path: "/temperature",
    icon: "🌡️", 
    color: "bg-red-500 hover:bg-red-600"
  },
  {
    title: "Currency Converter",
    description: "Convert between different world currencies",
    path: "/currency",
    icon: "💱",
    color: "bg-yellow-500 hover:bg-yellow-600"
  },
  {
    title: "Number System Converter", 
    description: "Convert Binary, Decimal, Hexadecimal, BCD",
    path: "/number-system",
    icon: "💻",
    color: "bg-indigo-500 hover:bg-indigo-600"
  },
  {
    title: "Time Converter",
    description: "Convert seconds, minutes, hours, days and more",
    path: "/time",
    icon: "⏰",
    color: "bg-pink-500 hover:bg-pink-600"
  },
  {
    title: "Speed Converter", 
    description: "Convert mph, km/h, m/s and more",
    path: "/speed",
    icon: "🚀",
    color: "bg-teal-500 hover:bg-teal-600"
  },
  {
    title: "Data Storage Converter",
    description: "Convert bytes, KB, MB, GB, TB and more", 
    path: "/data-storage",
    icon: "💾",
    color: "bg-gray-500 hover:bg-gray-600"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Banner Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-500 font-medium">Top Banner Ad Placement</p>
          <!-- Place Ad Code Here -->
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose a Tool to Convert or Calculate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, accurate, and free online conversion tools for all your calculation needs. 
            Convert units instantly with real-time results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {conversionTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose QuickCalc Tools?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Real-time conversion as you type</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900">Highly Accurate</h3>
                <p className="text-gray-600 text-sm">Precise calculations every time</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold text-gray-900">Mobile Friendly</h3>
                <p className="text-gray-600 text-sm">Works perfectly on all devices</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
