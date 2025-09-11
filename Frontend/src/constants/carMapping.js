// Car → Type mapping
const carTypeMap = {
  // Hatchbacks
  "Maruti Suzuki Swift": "Hatchback",
  "Hyundai i20": "Hatchback",
  "Tata Altroz": "Hatchback",
  "Toyota Glanza": "Hatchback",
  "Honda Jazz": "Hatchback",
  "Volkswagen Polo": "Hatchback",
  "Maruti Suzuki Baleno": "Hatchback",
  "Hyundai Grand i10 Nios": "Hatchback",
  "Citroën C3": "Hatchback",
  "Tata Tiago": "Hatchback",

  // Sedans
  "Maruti Suzuki Dzire – ZXI+": "Sedan",
  "Hyundai Aura – SX(O)": "Sedan",
  "Honda Amaze – VX": "Sedan",
  "Volkswagen Vento – Highline Plus": "Sedan",
  "Maruti Suzuki Ciaz – Alpha": "Sedan",
  "Škoda Slavia – Style": "Sedan",
  "Hyundai Verna – SX(O)": "Sedan",
  "Honda City – ZX": "Sedan",
  "Volkswagen Virtus – Highline": "Sedan",
  "Toyota Camry – Hybrid": "Sedan",

  // SUVs
  "Hyundai Creta – SX(O)": "SUV",
  "Kia Seltos – GTX+": "SUV",
  "Tata Harrier – XZA+": "SUV",
  "Mahindra XUV700 – AX7": "SUV",
  "Toyota Fortuner – Legender": "SUV",
  "MG Hector – Sharp": "SUV",
  "Maruti Suzuki Grand Vitara – Alpha+": "SUV",
  "Mahindra Scorpio-N – Z8L": "SUV",
  "Hyundai Alcazar – Signature": "SUV",
  "Jeep Compass – Limited (O)": "SUV",
};

// Base price per type
const planPricing = {
  Hatchback: 2500,
  Sedan: 3000,
  SUV: 3500,
};

// Multiply by duration
const durationMultipliers = {
  "1": 1,     // 1 month
  "3": 3,     // 3 months
  "6": 6,     // 6 months
  "12": 12,   // 12 months
};

module.exports = { carTypeMap, planPricing, durationMultipliers };