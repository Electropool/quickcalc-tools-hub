
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const OhmsLaw = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [power, setPower] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateOhmsLaw = () => {
    const V = parseFloat(voltage) || 0;
    const I = parseFloat(current) || 0;
    const R = parseFloat(resistance) || 0;
    const P = parseFloat(power) || 0;

    const filledInputs = [V, I, R, P].filter(val => val > 0).length;
    
    if (filledInputs < 2) {
      setResults({ error: "Please enter at least 2 values" });
      return;
    }

    let calculatedV = V, calculatedI = I, calculatedR = R, calculatedP = P;

    // Calculate missing values based on Ohm's Law
    if (V > 0 && I > 0 && R === 0) {
      calculatedR = V / I;
    } else if (V > 0 && R > 0 && I === 0) {
      calculatedI = V / R;
    } else if (I > 0 && R > 0 && V === 0) {
      calculatedV = I * R;
    }

    // Calculate power
    if (calculatedV > 0 && calculatedI > 0 && P === 0) {
      calculatedP = calculatedV * calculatedI;
    } else if (calculatedV > 0 && calculatedR > 0 && P === 0) {
      calculatedP = (calculatedV * calculatedV) / calculatedR;
    } else if (calculatedI > 0 && calculatedR > 0 && P === 0) {
      calculatedP = calculatedI * calculatedI * calculatedR;
    }

    // Calculate from power
    if (P > 0 && V > 0 && I === 0) {
      calculatedI = P / V;
    } else if (P > 0 && I > 0 && V === 0) {
      calculatedV = P / I;
    } else if (P > 0 && R > 0 && V === 0) {
      calculatedV = Math.sqrt(P * R);
    } else if (P > 0 && R > 0 && I === 0) {
      calculatedI = Math.sqrt(P / R);
    }

    setResults({
      voltage: calculatedV.toFixed(3),
      current: calculatedI.toFixed(3),
      resistance: calculatedR.toFixed(3),
      power: calculatedP.toFixed(3)
    });
  };

  return (
    <ConverterLayout 
      title="Ohm's Law Calculator" 
      description="Calculate Voltage, Current, Resistance, and Power using Ohm's Law formulas"
    >
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Input Values (Enter at least 2)</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Voltage (V)
              </label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter voltage in volts"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current (I)
              </label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter current in amperes"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resistance (R)
              </label>
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter resistance in ohms"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Power (P)
              </label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter power in watts"
              />
            </div>

            <button
              onClick={calculateOhmsLaw}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
            
            {results && (
              <div className="bg-purple-50 rounded-lg p-4">
                {results.error ? (
                  <div className="text-red-600">{results.error}</div>
                ) : (
                  <div className="space-y-2">
                    <div><strong>Voltage:</strong> {results.voltage} V</div>
                    <div><strong>Current:</strong> {results.current} A</div>
                    <div><strong>Resistance:</strong> {results.resistance} Ω</div>
                    <div><strong>Power:</strong> {results.power} W</div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 text-sm text-gray-600">
              <h4 className="font-semibold mb-2">Formulas Used:</h4>
              <div className="space-y-1">
                <div>V = I × R</div>
                <div>I = V ÷ R</div>
                <div>R = V ÷ I</div>
                <div>P = V × I</div>
                <div>P = V² ÷ R</div>
                <div>P = I² × R</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default OhmsLaw;
