
import { useState, useEffect } from "react";
import ConverterLayout from "../components/ConverterLayout";
import { numberSystems, convertNumberSystem, isValidNumberSystemInput } from "../utils/conversions";

const NumberSystemConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputSystem, setInputSystem] = useState("decimal");
  const [outputSystem, setOutputSystem] = useState("binary");
  const [outputValue, setOutputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (inputValue.trim() === "") {
      setOutputValue("");
      setError("");
      return;
    }

    if (!isValidNumberSystemInput(inputValue, inputSystem)) {
      setError(`Invalid ${inputSystem} input. Please check your input format.`);
      setOutputValue("");
      return;
    }

    try {
      setError("");
      const result = convertNumberSystem(inputValue, inputSystem, outputSystem);
      setOutputValue(result);
    } catch (err) {
      setError("Invalid input for selected number system.");
      setOutputValue("");
    }
  }, [inputValue, inputSystem, outputSystem]);

  return (
    <ConverterLayout
      title="Number System Converter"
      description="Convert between Binary, Decimal, Hexadecimal, Octal and BCD instantly"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">From</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number System
              </label>
              <select
                value={inputSystem}
                onChange={(e) => setInputSystem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {Object.entries(numberSystems).map(([key, system]) => (
                  <option key={key} value={key}>
                    {system.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Value
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                placeholder={`Enter ${inputSystem} value`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg font-mono"
              />
            </div>
          </div>

          {/* Output Side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">To</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number System
              </label>
              <select
                value={outputSystem}
                onChange={(e) => setOutputSystem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {Object.entries(numberSystems).map(([key, system]) => (
                  <option key={key} value={key}>
                    {system.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-lg min-h-[52px] flex items-center font-mono">
                {error ? (
                  <span className="text-red-500 font-medium">{error}</span>
                ) : (
                  <span className="text-gray-900 font-medium">
                    {outputValue || "Enter a value to see result"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick conversion reference */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Number System Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-medium mb-2">Decimal 255 equals:</p>
              <p className="text-gray-600">Binary: 11111111</p>
              <p className="text-gray-600">Hexadecimal: FF</p>
              <p className="text-gray-600">Octal: 377</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-medium mb-2">Valid Input Formats:</p>
              <p className="text-gray-600">Binary: 0s and 1s only</p>
              <p className="text-gray-600">Hex: 0-9 and A-F</p>
              <p className="text-gray-600">BCD: Groups of 4 bits</p>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default NumberSystemConverter;
