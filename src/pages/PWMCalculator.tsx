
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const PWMCalculator = () => {
  const [timeHigh, setTimeHigh] = useState("");
  const [timeLow, setTimeLow] = useState("");
  const [dutyCycle, setDutyCycle] = useState("");
  const [frequency, setFrequency] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculatePWM = () => {
    const tHigh = parseFloat(timeHigh) || 0;
    const tLow = parseFloat(timeLow) || 0;
    
    if (tHigh <= 0 || tLow <= 0) {
      setResults({ error: "Please enter valid HIGH and LOW times" });
      return;
    }

    const totalPeriod = tHigh + tLow;
    const calculatedDutyCycle = (tHigh / totalPeriod) * 100;
    const calculatedFrequency = 1 / (totalPeriod / 1000); // Convert ms to Hz

    setResults({
      dutyCycle: calculatedDutyCycle.toFixed(2),
      frequency: calculatedFrequency.toFixed(2),
      period: totalPeriod.toFixed(2),
      timeHigh: tHigh.toFixed(2),
      timeLow: tLow.toFixed(2)
    });
  };

  const calculateFromDutyCycle = () => {
    const duty = parseFloat(dutyCycle) || 0;
    const freq = parseFloat(frequency) || 0;
    
    if (duty <= 0 || duty > 100 || freq <= 0) {
      setResults({ error: "Please enter valid duty cycle (0-100%) and frequency" });
      return;
    }

    const periodMs = (1 / freq) * 1000;
    const calculatedTimeHigh = (duty / 100) * periodMs;
    const calculatedTimeLow = periodMs - calculatedTimeHigh;

    setResults({
      dutyCycle: duty.toFixed(2),
      frequency: freq.toFixed(2),
      period: periodMs.toFixed(2),
      timeHigh: calculatedTimeHigh.toFixed(2),
      timeLow: calculatedTimeLow.toFixed(2)
    });
  };

  return (
    <ConverterLayout 
      title="PWM Duty Cycle Calculator" 
      description="Calculate duty cycle percentage from HIGH and LOW times, or calculate timing from duty cycle and frequency"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Calculate from Times */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Calculate from Timing</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time HIGH (ms)
              </label>
              <input
                type="number"
                value={timeHigh}
                onChange={(e) => setTimeHigh(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter HIGH time in milliseconds"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time LOW (ms)
              </label>
              <input
                type="number"
                value={timeLow}
                onChange={(e) => setTimeLow(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter LOW time in milliseconds"
              />
            </div>

            <button
              onClick={calculatePWM}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate Duty Cycle
            </button>
          </div>
        </div>

        {/* Calculate from Duty Cycle */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Calculate from Duty Cycle</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duty Cycle (%)
              </label>
              <input
                type="number"
                value={dutyCycle}
                onChange={(e) => setDutyCycle(e.target.value)}
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter duty cycle percentage"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency (Hz)
              </label>
              <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter frequency in Hz"
              />
            </div>

            <button
              onClick={calculateFromDutyCycle}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate Timing
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
          
          {results.error ? (
            <div className="text-red-600">{results.error}</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">PWM Parameters</h4>
                <div className="space-y-1 text-sm">
                  <div><strong>Duty Cycle:</strong> {results.dutyCycle}%</div>
                  <div><strong>Frequency:</strong> {results.frequency} Hz</div>
                  <div><strong>Period:</strong> {results.period} ms</div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Timing</h4>
                <div className="space-y-1 text-sm">
                  <div><strong>Time HIGH:</strong> {results.timeHigh} ms</div>
                  <div><strong>Time LOW:</strong> {results.timeLow} ms</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common PWM Applications</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>LED Brightness:</strong><br />
            0-100% duty cycle controls brightness
          </div>
          <div>
            <strong>Motor Speed:</strong><br />
            Higher duty cycle = faster speed
          </div>
          <div>
            <strong>Servo Control:</strong><br />
            1-2ms pulse width, 20ms period (50Hz)
          </div>
          <div>
            <strong>Arduino PWM:</strong><br />
            Default frequency: ~490Hz (pins 3,9,10,11) or ~980Hz (pins 5,6)
          </div>
          <div>
            <strong>Formula:</strong><br />
            Duty Cycle = (T_HIGH / T_TOTAL) × 100%
          </div>
          <div>
            <strong>50% Duty Cycle:</strong><br />
            Square wave, equal HIGH and LOW times
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default PWMCalculator;
