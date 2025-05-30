
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const CapacitorCalculator = () => {
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateRC = () => {
    const R = parseFloat(resistance) || 0;
    const C = parseFloat(capacitance) || 0;
    
    if (R <= 0 || C <= 0) {
      setResults({ error: "Please enter valid resistance and capacitance values" });
      return;
    }

    const timeConstant = R * C; // τ = R × C
    const charge63 = timeConstant; // 63.2% charge time
    const charge95 = timeConstant * 3; // 95% charge time
    const charge99 = timeConstant * 5; // 99% charge time
    
    const cutoffFreq = 1 / (2 * Math.PI * timeConstant); // -3dB cutoff frequency

    setResults({
      timeConstant: timeConstant.toFixed(6),
      charge63: charge63.toFixed(6),
      charge95: charge95.toFixed(6),
      charge99: charge99.toFixed(6),
      cutoffFreq: cutoffFreq.toFixed(2),
      resistance: R,
      capacitance: C
    });
  };

  return (
    <ConverterLayout 
      title="Capacitor Charge Time Calculator" 
      description="Calculate RC circuit time constants, charge times, and cutoff frequencies"
    >
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">RC Circuit Parameters</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resistance (Ω)
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
                Capacitance (F)
              </label>
              <input
                type="number"
                value={capacitance}
                onChange={(e) => setCapacitance(e.target.value)}
                step="0.000001"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter capacitance in farads (e.g., 0.000001 for 1µF)"
              />
              <div className="text-xs text-gray-500 mt-1">
                Common values: 1µF = 0.000001, 100nF = 0.0000001, 10pF = 0.00000000001
              </div>
            </div>

            <button
              onClick={calculateRC}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate RC Parameters
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
            
            {results && (
              <div className="space-y-4">
                {results.error ? (
                  <div className="text-red-600">{results.error}</div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Time Constant (τ)</h4>
                      <div className="text-lg font-mono">{results.timeConstant} seconds</div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Charge Times</h4>
                      <div className="space-y-1 text-sm">
                        <div><strong>63.2% charge:</strong> {results.charge63} s</div>
                        <div><strong>95% charge:</strong> {results.charge95} s</div>
                        <div><strong>99% charge:</strong> {results.charge99} s</div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Filter Properties</h4>
                      <div className="text-sm">
                        <strong>Cutoff Frequency:</strong> {results.cutoffFreq} Hz
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Formulas and Reference */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">RC Circuit Formulas</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Time Constant</h4>
            <div className="space-y-1">
              <div>τ = R × C</div>
              <div>After 1τ: 63.2% charged</div>
              <div>After 3τ: 95% charged</div>
              <div>After 5τ: 99% charged</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Low-Pass Filter</h4>
            <div className="space-y-1">
              <div>f₀ = 1 / (2π × R × C)</div>
              <div>-3dB cutoff frequency</div>
              <div>Used for noise filtering</div>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default CapacitorCalculator;
