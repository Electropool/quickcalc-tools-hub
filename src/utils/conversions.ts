
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

// Volume conversion utilities
export const volumeUnits = {
  liter: { name: "Liter", symbol: "L", factor: 1 },
  milliliter: { name: "Milliliter", symbol: "mL", factor: 0.001 },
  cubicMeter: { name: "Cubic Meter", symbol: "m³", factor: 1000 },
  cubicCentimeter: { name: "Cubic Centimeter", symbol: "cm³", factor: 0.001 },
  cubicInch: { name: "Cubic Inch", symbol: "in³", factor: 0.0163871 },
  cubicFoot: { name: "Cubic Foot", symbol: "ft³", factor: 28.3168 },
  gallonUS: { name: "Gallon (US)", symbol: "gal", factor: 3.78541 },
  gallonUK: { name: "Gallon (UK)", symbol: "gal", factor: 4.54609 },
  quart: { name: "Quart", symbol: "qt", factor: 0.946353 },
  pint: { name: "Pint", symbol: "pt", factor: 0.473176 },
};

export const convertVolume = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = volumeUnits[fromUnit as keyof typeof volumeUnits]?.factor || 1;
  const toFactor = volumeUnits[toUnit as keyof typeof volumeUnits]?.factor || 1;
  
  // Convert to liters first, then to target unit
  const liters = value * fromFactor;
  return liters / toFactor;
};

// Weight/Mass conversion utilities
export const weightUnits = {
  kilogram: { name: "Kilogram", symbol: "kg", factor: 1 },
  gram: { name: "Gram", symbol: "g", factor: 0.001 },
  milligram: { name: "Milligram", symbol: "mg", factor: 0.000001 },
  tonne: { name: "Tonne", symbol: "t", factor: 1000 },
  pound: { name: "Pound", symbol: "lb", factor: 0.453592 },
  ounce: { name: "Ounce", symbol: "oz", factor: 0.0283495 },
  stone: { name: "Stone", symbol: "st", factor: 6.35029 },
};

export const convertWeight = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = weightUnits[fromUnit as keyof typeof weightUnits]?.factor || 1;
  const toFactor = weightUnits[toUnit as keyof typeof weightUnits]?.factor || 1;
  
  // Convert to kilograms first, then to target unit
  const kilograms = value * fromFactor;
  return kilograms / toFactor;
};

// Number System conversion utilities
export const numberSystems = {
  binary: { name: "Binary", base: 2 },
  decimal: { name: "Decimal", base: 10 },
  octal: { name: "Octal", base: 8 },
  hexadecimal: { name: "Hexadecimal", base: 16 },
  bcd: { name: "BCD (Binary Coded Decimal)", base: "bcd" },
};

export const convertNumberSystem = (value: string, fromSystem: string, toSystem: string): string => {
  try {
    let decimalValue: number;
    
    // Convert input to decimal first
    if (fromSystem === 'bcd') {
      // BCD to decimal conversion
      const bcdGroups = value.match(/.{1,4}/g) || [];
      let result = '';
      for (const group of bcdGroups) {
        const decimal = parseInt(group, 2);
        if (decimal > 9) throw new Error('Invalid BCD');
        result += decimal.toString();
      }
      decimalValue = parseInt(result, 10);
    } else {
      const base = numberSystems[fromSystem as keyof typeof numberSystems]?.base as number;
      decimalValue = parseInt(value, base);
    }
    
    if (isNaN(decimalValue)) throw new Error('Invalid input');
    
    // Convert from decimal to target system
    if (toSystem === 'bcd') {
      // Decimal to BCD conversion
      const digits = decimalValue.toString().split('');
      return digits.map(digit => parseInt(digit).toString(2).padStart(4, '0')).join('');
    } else {
      const base = numberSystems[toSystem as keyof typeof numberSystems]?.base as number;
      return decimalValue.toString(base).toUpperCase();
    }
  } catch (error) {
    throw new Error('Invalid input for selected number system');
  }
};

// Time conversion utilities
export const timeUnits = {
  second: { name: "Second", symbol: "s", factor: 1 },
  minute: { name: "Minute", symbol: "min", factor: 60 },
  hour: { name: "Hour", symbol: "h", factor: 3600 },
  day: { name: "Day", symbol: "d", factor: 86400 },
  millisecond: { name: "Millisecond", symbol: "ms", factor: 0.001 },
  microsecond: { name: "Microsecond", symbol: "μs", factor: 0.000001 },
};

export const convertTime = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = timeUnits[fromUnit as keyof typeof timeUnits]?.factor || 1;
  const toFactor = timeUnits[toUnit as keyof typeof timeUnits]?.factor || 1;
  
  // Convert to seconds first, then to target unit
  const seconds = value * fromFactor;
  return seconds / toFactor;
};

// Speed conversion utilities
export const speedUnits = {
  metersPerSecond: { name: "Meters per Second", symbol: "m/s", factor: 1 },
  kilometersPerHour: { name: "Kilometers per Hour", symbol: "km/h", factor: 0.277778 },
  milesPerHour: { name: "Miles per Hour", symbol: "mph", factor: 0.44704 },
  feetPerSecond: { name: "Feet per Second", symbol: "ft/s", factor: 0.3048 },
  knot: { name: "Knot", symbol: "kn", factor: 0.514444 },
};

export const convertSpeed = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = speedUnits[fromUnit as keyof typeof speedUnits]?.factor || 1;
  const toFactor = speedUnits[toUnit as keyof typeof speedUnits]?.factor || 1;
  
  // Convert to m/s first, then to target unit
  const metersPerSecond = value * fromFactor;
  return metersPerSecond / toFactor;
};

// Data Storage conversion utilities
export const dataUnits = {
  bit: { name: "Bit", symbol: "bit", factor: 1 },
  byte: { name: "Byte", symbol: "B", factor: 8 },
  kilobyte: { name: "Kilobyte", symbol: "KB", factor: 8192 },
  megabyte: { name: "Megabyte", symbol: "MB", factor: 8388608 },
  gigabyte: { name: "Gigabyte", symbol: "GB", factor: 8589934592 },
  terabyte: { name: "Terabyte", symbol: "TB", factor: 8796093022208 },
  kilobit: { name: "Kilobit", symbol: "Kb", factor: 1024 },
  megabit: { name: "Megabit", symbol: "Mb", factor: 1048576 },
};

export const convertDataStorage = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = dataUnits[fromUnit as keyof typeof dataUnits]?.factor || 1;
  const toFactor = dataUnits[toUnit as keyof typeof dataUnits]?.factor || 1;
  
  // Convert to bits first, then to target unit
  const bits = value * fromFactor;
  return bits / toFactor;
};

// Micro/Small Length conversion utilities
export const microLengthUnits = {
  nanometer: { name: "Nanometer", symbol: "nm", factor: 1e-9 },
  micrometer: { name: "Micrometer", symbol: "μm", factor: 1e-6 },
  millimeter: { name: "Millimeter", symbol: "mm", factor: 1e-3 },
  picometer: { name: "Picometer", symbol: "pm", factor: 1e-12 },
  femtometer: { name: "Femtometer", symbol: "fm", factor: 1e-15 },
  angstrom: { name: "Angstrom", symbol: "Å", factor: 1e-10 },
};

export const convertMicroLength = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = microLengthUnits[fromUnit as keyof typeof microLengthUnits]?.factor || 1;
  const toFactor = microLengthUnits[toUnit as keyof typeof microLengthUnits]?.factor || 1;
  
  // Convert to meters first, then to target unit
  const meters = value * fromFactor;
  return meters / toFactor;
};

// Area conversion utilities
export const areaUnits = {
  squareMeter: { name: "Square Meter", symbol: "m²", factor: 1 },
  squareKilometer: { name: "Square Kilometer", symbol: "km²", factor: 1000000 },
  squareCentimeter: { name: "Square Centimeter", symbol: "cm²", factor: 0.0001 },
  squareInch: { name: "Square Inch", symbol: "in²", factor: 0.00064516 },
  squareFoot: { name: "Square Foot", symbol: "ft²", factor: 0.092903 },
  acre: { name: "Acre", symbol: "ac", factor: 4046.86 },
  hectare: { name: "Hectare", symbol: "ha", factor: 10000 },
};

export const convertArea = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = areaUnits[fromUnit as keyof typeof areaUnits]?.factor || 1;
  const toFactor = areaUnits[toUnit as keyof typeof areaUnits]?.factor || 1;
  
  // Convert to square meters first, then to target unit
  const squareMeters = value * fromFactor;
  return squareMeters / toFactor;
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

// Validate number system input
export const isValidNumberSystemInput = (input: string, system: string): boolean => {
  if (input.trim() === '') return false;
  
  switch (system) {
    case 'binary':
      return /^[01]+$/.test(input);
    case 'decimal':
      return /^[0-9]+$/.test(input);
    case 'octal':
      return /^[0-7]+$/.test(input);
    case 'hexadecimal':
      return /^[0-9A-Fa-f]+$/.test(input);
    case 'bcd':
      return /^[01]+$/.test(input) && input.length % 4 === 0;
    default:
      return false;
  }
};
