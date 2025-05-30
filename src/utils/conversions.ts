
// Length conversion utilities
export const lengthUnits = {
  meter: { name: "Meter", symbol: "m", factor: 1 },
  kilometer: { name: "Kilometer", symbol: "km", factor: 1000 },
  centimeter: { name: "Centimeter", symbol: "cm", factor: 0.01 },
  millimeter: { name: "Millimeter", symbol: "mm", factor: 0.001 },
  inch: { name: "Inch", symbol: "in", factor: 0.0254 },
  foot: { name: "Foot", symbol: "ft", factor: 0.3048 },
  yard: { name: "Yard", symbol: "yd", factor: 0.9144 },
  mile: { name: "Mile", symbol: "mi", factor: 1609.34 },
};

export const convertLength = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = lengthUnits[fromUnit as keyof typeof lengthUnits]?.factor || 1;
  const toFactor = lengthUnits[toUnit as keyof typeof lengthUnits]?.factor || 1;
  
  // Convert to meters first, then to target unit
  const meters = value * fromFactor;
  return meters / toFactor;
};

// Temperature conversion utilities
export const temperatureUnits = {
  celsius: { name: "Celsius", symbol: "°C" },
  fahrenheit: { name: "Fahrenheit", symbol: "°F" },
  kelvin: { name: "Kelvin", symbol: "K" },
  rankine: { name: "Rankine", symbol: "°R" },
};

export const convertTemperature = (value: number, fromUnit: string, toUnit: string): number => {
  // Convert everything to Celsius first
  let celsius: number;
  
  switch (fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    case 'rankine':
      celsius = (value - 491.67) * 5/9;
      break;
    default:
      celsius = value;
  }
  
  // Convert from Celsius to target unit
  switch (toUnit) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return (celsius * 9/5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    case 'rankine':
      return (celsius * 9/5) + 491.67;
    default:
      return celsius;
  }
};

// Input validation utility
export const isValidNumber = (input: string): boolean => {
  if (input.trim() === '') return false;
  const num = parseFloat(input);
  return !isNaN(num) && isFinite(num);
};

// Format number for display
export const formatNumber = (num: number): string => {
  if (Math.abs(num) < 0.001 && num !== 0) {
    return num.toExponential(6);
  }
  return parseFloat(num.toFixed(10)).toString();
};
