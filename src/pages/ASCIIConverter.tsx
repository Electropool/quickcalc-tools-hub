
import { useState } from "react";
import ConverterLayout from "../components/ConverterLayout";

const ASCIIConverter = () => {
  const [charInput, setCharInput] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [charResult, setCharResult] = useState<any>(null);
  const [codeResult, setCodeResult] = useState<any>(null);

  const convertCharToCode = (char: string) => {
    if (char.length === 0) {
      setCharResult(null);
      return;
    }
    
    const firstChar = char[0];
    const code = firstChar.charCodeAt(0);
    
    setCharResult({
      character: firstChar,
      decimal: code,
      hex: '0x' + code.toString(16).toUpperCase(),
      binary: code.toString(2).padStart(8, '0'),
      octal: '0' + code.toString(8)
    });
  };

  const convertCodeToChar = (code: string) => {
    if (code.length === 0) {
      setCodeResult(null);
      return;
    }

    const num = parseInt(code);
    if (isNaN(num) || num < 0 || num > 127) {
      setCodeResult({ error: "Invalid ASCII code (0-127)" });
      return;
    }

    const char = String.fromCharCode(num);
    setCodeResult({
      character: char,
      decimal: num,
      hex: '0x' + num.toString(16).toUpperCase(),
      binary: num.toString(2).padStart(8, '0'),
      octal: '0' + num.toString(8)
    });
  };

  return (
    <ConverterLayout 
      title="ASCII Code Finder" 
      description="Convert characters to ASCII codes and vice versa with HEX, DEC, and BIN values"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Character to Code */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Character to ASCII</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Character
              </label>
              <input
                type="text"
                value={charInput}
                onChange={(e) => {
                  setCharInput(e.target.value);
                  convertCharToCode(e.target.value);
                }}
                maxLength={1}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center text-2xl"
                placeholder="A"
              />
            </div>

            {charResult && (
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
                <div className="space-y-1 font-mono text-sm">
                  <div><strong>Character:</strong> {charResult.character}</div>
                  <div><strong>Decimal:</strong> {charResult.decimal}</div>
                  <div><strong>Hex:</strong> {charResult.hex}</div>
                  <div><strong>Binary:</strong> {charResult.binary}</div>
                  <div><strong>Octal:</strong> {charResult.octal}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Code to Character */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ASCII to Character</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter ASCII Code (0-127)
              </label>
              <input
                type="number"
                value={codeInput}
                onChange={(e) => {
                  setCodeInput(e.target.value);
                  convertCodeToChar(e.target.value);
                }}
                min="0"
                max="127"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="65"
              />
            </div>

            {codeResult && (
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
                {codeResult.error ? (
                  <div className="text-red-600">{codeResult.error}</div>
                ) : (
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>Character:</strong> {codeResult.character}</div>
                    <div><strong>Decimal:</strong> {codeResult.decimal}</div>
                    <div><strong>Hex:</strong> {codeResult.hex}</div>
                    <div><strong>Binary:</strong> {codeResult.binary}</div>
                    <div><strong>Octal:</strong> {codeResult.octal}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <strong>Numbers (0-9):</strong><br />
            ASCII 48-57
          </div>
          <div>
            <strong>Uppercase (A-Z):</strong><br />
            ASCII 65-90
          </div>
          <div>
            <strong>Lowercase (a-z):</strong><br />
            ASCII 97-122
          </div>
          <div>
            <strong>Space:</strong><br />
            ASCII 32
          </div>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default ASCIIConverter;
