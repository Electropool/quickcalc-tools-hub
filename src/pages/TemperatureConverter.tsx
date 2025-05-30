
import { useState, useEffect } from "react";
import ConverterLayout from "../components/ConverterLayout";
import { temperatureUnits, convertTemperature, isValidNumber, formatNumber } from "../utils/conversions";

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputUnit, setOutputUnit] = useState("fahrenheit");
  const [outputValue, setOutputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (inputValue.trim() === "") {
      setOutputValue("");
      setError("");
      return;
    }

    if (!isValidNumber(inputValue)) {
      setError("Please enter a valid number.");
      setOutputValue("");
      return;
    }

    setError("");
    const result = convertTemperature(parseFloat(inputValue), inputUnit, outputUnit);
    setOutputValue(formatNumber(result));
  }, [inputValue, inputUnit, outputUnit]);

  return (
    <ConverterLayout
      title="Temperature Converter"
      description="Convert between Celsius, Fahrenheit, Kelvin, and Rankine instantly"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">From</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit
              </label>
              <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {Object.entries(temperatureUnits).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Temperature
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter temperature to convert"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
              />
            </div>
          </div>

          {/* Output Side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">To</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit
              </label>
              <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {Object.entries(temperatureUnits).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-lg min-h-[52px] flex items-center">
                {error ? (
                  <span className="text-red-500 font-medium">{error}</span>
                ) : (
                  <span className="text-gray-900 font-medium">
                    {outputValue || "Enter a temperature to see result"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick conversion reference */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Common Temperatures</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-medium">Water Freezes</p>
              <p className="text-gray-600">0°C / 32°F</p>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="font-medium">Room Temperature</p>
              <p className="text-gray-600">20°C / 68°F</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium">Body Temperature</p>
              <p className="text-gray-600">37°C / 98.6°F</p>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <p className="font-medium">Water Boils</p>
              <p className="text-gray-600">100°C / 212°F</p>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default TemperatureConverter;
