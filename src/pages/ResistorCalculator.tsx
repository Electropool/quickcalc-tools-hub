
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const ResistorCalculator = () => {
  const [band1, setBand1] = useState("");
  const [band2, setBand2] = useState("");
  const [band3, setBand3] = useState("");
  const [band4, setBand4] = useState("");
  const [resistanceValue, setResistanceValue] = useState("");
  const [calculatedColors, setCalculatedColors] = useState<any>(null);
  const [calculatedResistance, setCalculatedResistance] = useState<any>(null);

  const colorValues: { [key: string]: number } = {
    'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
    'green': 5, 'blue': 6, 'violet': 7, 'grey': 8, 'white': 9
  };

  const multipliers: { [key: string]: number } = {
    'black': 1, 'brown': 10, 'red': 100, 'orange': 1000, 'yellow': 10000,
    'green': 100000, 'blue': 1000000, 'violet': 10000000, 'grey': 100000000, 'white': 1000000000
  };

  const tolerances: { [key: string]: string } = {
    'brown': '±1%', 'red': '±2%', 'gold': '±5%', 'silver': '±10%'
  };

  const colorOptions = Object.keys(colorValues);
  const toleranceOptions = Object.keys(tolerances);

  const calculateResistance = () => {
    if (!band1 || !band2 || !band3) {
      setCalculatedResistance({ error: "Please select first 3 bands" });
      return;
    }

    const digit1 = colorValues[band1];
    const digit2 = colorValues[band2];
    const multiplier = multipliers[band3];
    const tolerance = band4 ? tolerances[band4] : 'No tolerance selected';

    const resistance = (digit1 * 10 + digit2) * multiplier;
    
    setCalculatedResistance({
      resistance: resistance,
      formattedResistance: formatResistance(resistance),
      tolerance: tolerance
    });
  };

  const calculateColors = () => {
    const value = parseFloat(resistanceValue);
    if (isNaN(value) || value <= 0) {
      setCalculatedColors({ error: "Please enter a valid resistance value" });
      return;
    }

    // Find the best representation
    let bestBand1 = '', bestBand2 = '', bestBand3 = '';
    let found = false;

    for (const [color3, mult] of Object.entries(multipliers)) {
      const baseValue = value / mult;
      if (baseValue >= 10 && baseValue < 100) {
        const digit1 = Math.floor(baseValue / 10);
        const digit2 = Math.round(baseValue % 10);
        
        if (digit1 >= 0 && digit1 <= 9 && digit2 >= 0 && digit2 <= 9) {
          bestBand1 = Object.keys(colorValues)[digit1];
          bestBand2 = Object.keys(colorValues)[digit2];
          bestBand3 = color3;
          found = true;
          break;
        }
      }
    }

    if (found) {
      setCalculatedColors({
        band1: bestBand1,
        band2: bestBand2,
        band3: bestBand3,
        resistance: value,
        formattedResistance: formatResistance(value)
      });
    } else {
      setCalculatedColors({ error: "Cannot represent this value with standard color bands" });
    }
  };

  const formatResistance = (resistance: number): string => {
    if (resistance >= 1000000) {
      return `${(resistance / 1000000).toFixed(2)}MΩ`;
    } else if (resistance >= 1000) {
      return `${(resistance / 1000).toFixed(2)}kΩ`;
    } else {
      return `${resistance}Ω`;
    }
  };

  const getColorDisplay = (color: string): string => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  };

  return (
    <ConverterLayout 
      title="Resistor Color Code Calculator" 
      description="Calculate resistance from color bands or find color codes for resistance values"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Colors to Resistance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors to Resistance</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">1st Band (First Digit)</label>
              <select
                value={band1}
                onChange={(e) => setBand1(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{getColorDisplay(color)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">2nd Band (Second Digit)</label>
              <select
                value={band2}
                onChange={(e) => setBand2(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{getColorDisplay(color)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">3rd Band (Multiplier)</label>
              <select
                value={band3}
                onChange={(e) => setBand3(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select color</option>
                {colorOptions.map(color => (
                  <option key={color} value={color}>{getColorDisplay(color)} (×{multipliers[color]})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">4th Band (Tolerance) - Optional</label>
              <select
                value={band4}
                onChange={(e) => setBand4(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select tolerance</option>
                {toleranceOptions.map(color => (
                  <option key={color} value={color}>{getColorDisplay(color)} ({tolerances[color]})</option>
                ))}
              </select>
            </div>

            <button
              onClick={calculateResistance}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate Resistance
            </button>

            {calculatedResistance && (
              <div className="bg-purple-50 rounded-lg p-4">
                {calculatedResistance.error ? (
                  <div className="text-red-600">{calculatedResistance.error}</div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-center mb-2">
                      {calculatedResistance.formattedResistance}
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      {calculatedResistance.tolerance}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Resistance to Colors */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resistance to Colors</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resistance Value (Ω)
              </label>
              <input
                type="number"
                value={resistanceValue}
                onChange={(e) => setResistanceValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter resistance in ohms (e.g., 4700)"
              />
            </div>

            <button
              onClick={calculateColors}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Find Color Bands
            </button>

            {calculatedColors && (
              <div className="bg-blue-50 rounded-lg p-4">
                {calculatedColors.error ? (
                  <div className="text-red-600">{calculatedColors.error}</div>
                ) : (
                  <div>
                    <div className="text-center mb-2">
                      <strong>{calculatedColors.formattedResistance}</strong>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div><strong>1st Band:</strong> {getColorDisplay(calculatedColors.band1)}</div>
                      <div><strong>2nd Band:</strong> {getColorDisplay(calculatedColors.band2)}</div>
                      <div><strong>3rd Band:</strong> {getColorDisplay(calculatedColors.band3)}</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Color Reference */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Code Reference</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Digit Values</h4>
            <div className="grid grid-cols-2 gap-1">
              {Object.entries(colorValues).map(([color, value]) => (
                <div key={color}>{getColorDisplay(color)}: {value}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tolerance Values</h4>
            <div className="space-y-1">
              {Object.entries(tolerances).map(([color, tolerance]) => (
                <div key={color}>{getColorDisplay(color)}: {tolerance}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default ResistorCalculator;
