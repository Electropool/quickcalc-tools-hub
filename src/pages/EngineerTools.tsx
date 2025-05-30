
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const engineerTools = [
  {
    title: "ASCII Code Finder",
    description: "Convert characters to ASCII codes and vice versa. Shows HEX, DEC, and BIN values.",
    path: "/ascii-converter",
    icon: "🔡",
  },
  {
    title: "Ohm's Law Calculator",
    description: "Calculate Voltage, Current, Resistance, and Power using Ohm's Law formulas.",
    path: "/ohms-law",
    icon: "🧠",
  },
  {
    title: "Resistor Color Code Calculator",
    description: "Find resistance from color bands or get color codes from resistance values.",
    path: "/resistor-calculator",
    icon: "🔋",
  },
  {
    title: "Frequency ↔ Time Period Converter",
    description: "Convert between frequency (Hz) and time period (ms) for signal timing.",
    path: "/frequency-converter",
    icon: "⏱️",
  },
  {
    title: "Capacitor Charge Time Calculator",
    description: "Calculate RC circuit time constants and charge percentages.",
    path: "/capacitor-calculator",
    icon: "⚡",
  },
  {
    title: "PWM Duty Cycle Calculator",
    description: "Calculate duty cycle percentage from HIGH and LOW times.",
    path: "/pwm-calculator",
    icon: "🎛️",
  },
];

const EngineerTools = () => {
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
            Engineer Tools
          </h1>
          <p className="text-lg text-gray-600">
            ASCII, Binary, Converters & Electronic Engineering Tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineerTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
          <div className="bg-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Engineering Made Simple
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="font-semibold text-gray-900">Professional Tools</h3>
                <p className="text-gray-600 text-sm">Industry-standard calculations</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900">Quick Results</h3>
                <p className="text-gray-600 text-sm">Instant calculations and conversions</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900">Accurate Formulas</h3>
                <p className="text-gray-600 text-sm">Based on engineering standards</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EngineerTools;
