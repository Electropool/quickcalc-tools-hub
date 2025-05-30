
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const FrequencyConverter = () => {
  const [frequency, setFrequency] = useState("");
  const [period, setPeriod] = useState("");

  const convertFromFrequency = (freq: string) => {
    if (freq === "") {
      setPeriod("");
      return;
    }
    
    const f = parseFloat(freq);
    if (isNaN(f) || f <= 0) {
      setPeriod("Invalid");
      return;
    }
    
    const periodMs = (1 / f) * 1000;
    setPeriod(periodMs.toFixed(6));
  };

  const convertFromPeriod = (per: string) => {
    if (per === "") {
      setFrequency("");
      return;
    }
    
    const p = parseFloat(per);
    if (isNaN(p) || p <= 0) {
      setFrequency("Invalid");
      return;
    }
    
    const freq = 1 / (p / 1000);
    setFrequency(freq.toFixed(6));
  };

  return (
    <ConverterLayout 
      title="Frequency ↔ Time Period Converter" 
      description="Convert between frequency (Hz) and time period (ms) for signal timing and PWM calculations"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequency to Period</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency (Hz)
              </label>
              <input
                type="number"
                value={frequency}
                onChange={(e) => {
                  setFrequency(e.target.value);
                  convertFromFrequency(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter frequency in Hz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period (ms)
              </label>
              <input
                type="text"
                value={period}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                placeholder="Result will appear here"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Period to Frequency</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period (ms)
              </label>
              <input
                type="number"
                value={period}
                onChange={(e) => {
                  setPeriod(e.target.value);
                  convertFromPeriod(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter period in ms"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency (Hz)
              </label>
              <input
                type="text"
                value={frequency}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                placeholder="Result will appear here"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Frequencies</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>50 Hz (AC Power):</strong><br />
            Period: 20 ms
          </div>
          <div>
            <strong>60 Hz (AC Power US):</strong><br />
            Period: 16.67 ms
          </div>
          <div>
            <strong>1 kHz (Audio):</strong><br />
            Period: 1 ms
          </div>
          <div>
            <strong>1 MHz (Radio):</strong><br />
            Period: 1 μs
          </div>
          <div>
            <strong>16 MHz (Arduino):</strong><br />
            Period: 62.5 ns
          </div>
          <div>
            <strong>Formula:</strong><br />
            f = 1/T, T = 1/f
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default FrequencyConverter;
