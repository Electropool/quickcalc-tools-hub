
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const measurementTools = [
  {
    title: "Length/Distance Converter",
    description: "Convert between meters, feet, inches, kilometers and more",
    path: "/length",
    icon: "📏",
  },
  {
    title: "Area Converter", 
    description: "Convert square meters, acres, hectares and more",
    path: "/area",
    icon: "📐",
  },
  {
    title: "Volume Converter",
    description: "Convert liters, gallons, cubic meters and more", 
    path: "/volume",
    icon: "🥤",
  },
  {
    title: "Micro/Small Length Converter",
    description: "Convert nanometers, micrometers, angstroms and more",
    path: "/micro-length",
    icon: "🔬",
  },
];

const scienceMathTools = [
  {
    title: "Weight/Mass Converter",
    description: "Convert kilograms, pounds, ounces and more",
    path: "/weight", 
    icon: "⚖️",
  },
  {
    title: "Temperature Converter",
    description: "Convert Celsius, Fahrenheit, Kelvin and more",
    path: "/temperature",
    icon: "🌡️", 
  },
  {
    title: "Number System Converter", 
    description: "Convert Binary, Decimal, Hexadecimal, BCD",
    path: "/number-system",
    icon: "💻",
  },
];

const techDataTools = [
  {
    title: "Data Storage Converter",
    description: "Convert bytes, KB, MB, GB, TB and more", 
    path: "/data-storage",
    icon: "💾",
  },
  {
    title: "Speed Converter", 
    description: "Convert mph, km/h, m/s and more",
    path: "/speed",
    icon: "🚀",
  },
  {
    title: "Time Converter",
    description: "Convert seconds, minutes, hours, days and more",
    path: "/time",
    icon: "⏰",
  },
];

const comingSoonTools = [
  {
    title: "Currency Converter",
    description: "Convert between different world currencies",
    path: "/currency",
    icon: "💱",
  },
];

const ToolCategory = ({ title, tools, bgColor }: { title: string; tools: any[]; bgColor: string }) => (
  <div className="mb-12">
    <h2 className={`text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 ${bgColor}`}>
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
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
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Banner Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-500 font-medium">Top Banner Ad Placement</p>
          {/* Place Ad Code Here */}
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

        <ToolCategory 
          title="📏 Measurements & Dimensions" 
          tools={measurementTools} 
          bgColor="border-blue-500" 
        />
        
        <ToolCategory 
          title="🧪 Science & Mathematics" 
          tools={scienceMathTools} 
          bgColor="border-green-500" 
        />
        
        <ToolCategory 
          title="💻 Technology & Data" 
          tools={techDataTools} 
          bgColor="border-purple-500" 
        />
        
        <ToolCategory 
          title="🚧 Coming Soon" 
          tools={comingSoonTools} 
          bgColor="border-yellow-500" 
        />

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
