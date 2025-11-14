console.log("✅ AI Symptom Analyzer Loaded!");

// Database of 30+ symptoms with causes, precautions, and remedies
const symptomDatabase = {
  fever: {
    causes: ["Viral infection", "Bacterial infection", "Flu", "Dengue"],
    precautions: ["Stay hydrated", "Get enough rest", "Monitor temperature"],
    remedies: ["Cold compress", "Take paracetamol", "Drink ORS fluids"]
  },
  headache: {
    causes: ["Stress", "Dehydration", "Migraine", "Screen strain"],
    precautions: ["Avoid bright screens", "Drink water", "Sleep well"],
    remedies: ["Peppermint tea", "Cold compress", "Massage temples"]
  },
  cough: {
    causes: ["Common cold", "Flu", "Allergy", "Infection"],
    precautions: ["Avoid cold drinks", "Stay warm"],
    remedies: ["Honey water", "Steam inhalation", "Ginger tea"]
  },
  cold: {
    causes: ["Viral infection", "Seasonal change"],
    precautions: ["Wear warm clothes", "Drink warm fluids"],
    remedies: ["Ginger tea", "Steam", "Warm soup"]
  },
  sorethroat: {
    causes: ["Viral infection", "Allergy", "Cold"],
    precautions: ["Avoid cold drinks", "Talk less"],
    remedies: ["Salt water gargle", "Honey lemon water"]
  },
  runningnose: {
    causes: ["Allergy", "Cold", "Flu"],
    precautions: ["Keep warm", "Avoid dust"],
    remedies: ["Steam", "Saline drops"]
  },
  sneezing: {
    causes: ["Allergies", "Dust", "Cold"],
    precautions: ["Avoid strong smells", "Use mask"],
    remedies: ["Steam inhalation"]
  },
  bodypain: {
    causes: ["Viral fever", "Fatigue", "Dehydration"],
    precautions: ["Avoid heavy work", "Sleep well"],
    remedies: ["Warm bath", "Light stretching"]
  },
  fatigue: {
    causes: ["Lack of sleep", "Anemia", "Stress"],
    precautions: ["Take rest", "Maintain diet"],
    remedies: ["Drink glucose water", "Deep breathing"]
  },
  nausea: {
    causes: ["Indigestion", "Food poisoning", "Pregnancy"],
    precautions: ["Avoid oily food", "Stay hydrated"],
    remedies: ["Ginger tea", "ORS", "Mint water"]
  },
  vomiting: {
    causes: ["Food poisoning", "Stomach infection"],
    precautions: ["Avoid eating until better", "Drink water slowly"],
    remedies: ["ORS", "Coconut water"]
  },
  stomachpain: {
    causes: ["Gas", "Indigestion", "Food poisoning"],
    precautions: ["Eat light food", "Avoid junk food"],
    remedies: ["Hot water bag", "Jeera water"]
  },
  diarrhea: {
    causes: ["Infection", "Expired food", "Contaminated water"],
    precautions: ["Avoid milk products", "Drink ORS"],
    remedies: ["ORS", "Banana", "Curd rice"]
  },
  constipation: {
    causes: ["Low fiber diet", "Less water"],
    precautions: ["Eat fiber-rich foods", "Drink water"],
    remedies: ["Warm water", "Fruits like papaya"]
  },
  chestpain: {
    causes: ["Gas", "Stress", "Muscle strain"],
    precautions: ["Avoid heavy meals", "Rest"],
    remedies: ["Warm water", "Sit upright"]
  },
  shortnessofbreath: {
    causes: ["Asthma", "Allergy", "Stress"],
    precautions: ["Avoid dust", "Stay calm"],
    remedies: ["Breathing exercises"]
  },
  dizziness: {
    causes: ["Low BP", "Dehydration"],
    precautions: ["Sit immediately", "Avoid standing fast"],
    remedies: ["Sugar water", "ORS"]
  },
  highbp: {
    causes: ["Stress", "Salt intake"],
    precautions: ["Avoid salt", "Avoid stress"],
    remedies: ["Deep breathing", "Warm water"]
  },
  backpain: {
    causes: ["Wrong posture", "Weak muscles"],
    precautions: ["Sit properly", "Avoid long sitting"],
    remedies: ["Hot pack", "Light stretching"]
  },
  jointpain: {
    causes: ["Arthritis", "Vitamin deficiency"],
    precautions: ["Avoid cold weather", "Eat calcium foods"],
    remedies: ["Warm oil massage"]
  },
  skinrash: {
    causes: ["Allergy", "Heat"],
    precautions: ["Avoid scratching", "Keep skin clean"],
    remedies: ["Aloe vera gel", "Ice pack"]
  },
  itching: {
    causes: ["Allergy", "Dry skin"],
    precautions: ["Avoid hot showers"],
    remedies: ["Moisturizer", "Aloe vera"]
  },
  lossappetite: {
    causes: ["Stomach infection", "Stress"],
    precautions: ["Eat small meals"],
    remedies: ["ORS", "Soup"]
  },
  weightloss: {
    causes: ["Thyroid", "Poor diet"],
    precautions: ["Increase calorie intake"],
    remedies: ["Milk, nuts, banana"]
  },
  swelling: {
    causes: ["Injury", "Venous issues"],
    precautions: ["Reduce salt", "Rest"],
    remedies: ["Cold compress"]
  },
  drycough: {
    causes: ["Allergy", "Throat dryness"],
    precautions: ["Avoid cold food"],
    remedies: ["Honey water"]
  },
  wetcough: {
    causes: ["Cold", "Flu"],
    precautions: ["Avoid cold drinks"],
    remedies: ["Steam", "Ginger tea"]
  },
  wheezing: {
    causes: ["Asthma", "Allergy"],
    precautions: ["Avoid dust"],
    remedies: ["Steam"]
  },
  earpain: {
    causes: ["Infection", "Wax buildup"],
    precautions: ["Avoid loud noise"],
    remedies: ["Warm compress"]
  },
  eyeredness: {
    causes: ["Infection", "Dust"],
    precautions: ["Avoid touching eyes"],
    remedies: ["Cold water wash"]
  },
  acne: {
    causes: ["Oil skin", "Hormonal imbalance"],
    precautions: ["Avoid oily food"],
    remedies: ["Aloe vera", "Neem pack"]
  }
};

// Click event for analyzing symptoms
document.getElementById("analyzeBtn").addEventListener("click", () => {
  const input = document.getElementById("symptoms").value.trim().toLowerCase();
  const output = document.getElementById("output");

  if (!input) {
    output.innerHTML = "<p>Please enter symptoms.</p>";
    return;
  }

  let found = false;
  let html = `<h2>🔍 Results:</h2>`;

  for (const sym in symptomDatabase) {
    if (input.includes(sym)) {
      const info = symptomDatabase[sym];
      found = true;

      html += `
        <h3>🩺 Symptom: ${sym}</h3>
        <p><b>Possible Causes:</b></p>
        <ul>${info.causes.map(c => `<li>${c}</li>`).join("")}</ul>

        <p><b>Precautions:</b></p>
        <ul>${info.precautions.map(p => `<li>${p}</li>`).join("")}</ul>

        <p><b>Home Remedies:</b></p>
        <ul>${info.remedies.map(r => `<li>${r}</li>`).join("")}</ul>

        <hr>
      `;
    }
  }

  if (!found) {
    html = "<p>No data found for your symptom.</p>";
  }

  output.innerHTML = html;
});
