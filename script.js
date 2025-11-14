console.log("✅ AI Medical Assistant Loaded!");

// Reference elements
const btn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");
const input = document.getElementById("symptoms");

// Symptom database (16 symptoms total)
const symptomDatabase = {
  fever: {
    causes: ["Viral infection", "Flu", "Dengue (if persistent)"],
    precautions: [
      "Stay hydrated and rest well",
      "Monitor temperature regularly",
      "Consult a doctor if fever lasts more than 3 days"
    ],
    remedies: [
      "Drink warm water",
      "Take paracetamol for relief",
      "Cold compress on forehead"
    ]
  },

  headache: {
    causes: ["Migraine", "Dehydration", "Stress or eye strain"],
    precautions: [
      "Avoid bright lights and loud noise",
      "Stay hydrated",
      "Take proper rest"
    ],
    remedies: [
      "Drink ginger or peppermint tea",
      "Massage temples gently",
      "Apply a cold or warm compress"
    ]
  },

  cough: {
    causes: ["Common cold", "Allergy", "Bronchitis"],
    precautions: [
      "Avoid cold drinks",
      "Use a humidifier",
      "Rest your throat"
    ],
    remedies: [
      "Honey with warm water",
      "Ginger tea",
      "Steam inhalation"
    ]
  },

  cold: {
    causes: ["Viral infection", "Change in weather"],
    precautions: [
      "Avoid chilled food and drinks",
      "Wash hands regularly",
      "Keep yourself warm"
    ],
    remedies: [
      "Drink tulsi or ginger tea",
      "Steam inhalation",
      "Stay hydrated"
    ]
  },

  stomachpain: {
    causes: ["Indigestion", "Gas trouble", "Food poisoning"],
    precautions: [
      "Avoid spicy and oily foods",
      "Eat light meals",
      "Stay hydrated"
    ],
    remedies: [
      "Drink buttermilk or mint tea",
      "Use a hot water bag",
      "Take rest"
    ]
  },

  sorethroat: {
    causes: ["Viral infection", "Cold", "Allergy"],
    precautions: [
      "Avoid cold food/drinks",
      "Gargle with warm salt water",
      "Rest your voice"
    ],
    remedies: [
      "Honey and lemon in warm water",
      "Ginger tea",
      "Warm soup"
    ]
  },

  // --- 10 New Symptoms Below ---
  dizziness: {
    causes: ["Low blood pressure", "Dehydration", "Low sugar levels", "Vertigo"],
    precautions: [
      "Sit or lie down immediately",
      "Avoid sudden standing",
      "Drink water often"
    ],
    remedies: [
      "ORS or electrolyte drink",
      "Ginger tea",
      "Eat a banana or biscuit"
    ]
  },

  vomiting: {
    causes: ["Food poisoning", "Gastric irritation", "Motion sickness"],
    precautions: [
      "Avoid heavy meals",
      "Do not lie flat immediately",
      "Stay hydrated"
    ],
    remedies: [
      "Sip ORS slowly",
      "Ginger with honey",
      "Cumin (jeera) water"
    ]
  },

  diarrhoea: {
    causes: ["Infection", "Contaminated food", "Stomach flu"],
    precautions: [
      "Avoid outside food",
      "Do not drink milk temporarily",
      "Drink plenty of fluids"
    ],
    remedies: [
      "ORS, coconut water",
      "Curd with rice",
      "Eat bland foods like khichdi"
    ]
  },

  backpain: {
    causes: ["Muscle strain", "Long sitting", "Incorrect posture"],
    precautions: [
      "Avoid lifting heavy items",
      "Sit straight with support",
      "Take frequent breaks"
    ],
    remedies: [
      "Hot/warm compress",
      "Gentle stretching",
      "Massage with pain relief oil"
    ]
  },

  chestpain: {
    causes: ["Acidity", "Muscle strain", "Stress"],
    precautions: [
      "Avoid heavy/oily food",
      "Do breathing exercises",
      "Reduce stress"
    ],
    remedies: [
      "Warm water",
      "Antacid if acidity",
      "Ginger tea"
    ]
  },

  rashes: {
    causes: ["Allergy", "Heat rash", "Skin infection"],
    precautions: [
      "Avoid scratching",
      "Keep skin cool",
      "Use mild soaps"
    ],
    remedies: [
      "Apply aloe vera",
      "Cold compress",
      "Calamine lotion"
    ]
  },

  eyeirritation: {
    causes: ["Dust allergy", "Screen strain", "Infection"],
    precautions: [
      "Avoid rubbing eyes",
      "Reduce screen time",
      "Wash eyes with clean water"
    ],
    remedies: [
      "Rose water drops",
      "Cold compress",
      "Cucumber slices"
    ]
  },

  earache: {
    causes: ["Infection", "Wax build-up", "Cold or sinus issues"],
    precautions: [
      "Avoid inserting objects",
      "Keep ear dry",
      "Avoid loud noises"
    ],
    remedies: [
      "Warm compress",
      "Olive oil drops (mild cases)",
      "Steam inhalation"
    ]
  },

  fatigue: {
    causes: ["Lack of sleep", "Anaemia", "Stress", "Dehydration"],
    precautions: [
      "Maintain proper sleep schedule",
      "Eat iron-rich foods",
      "Limit screen time"
    ],
    remedies: [
      "Drink water",
      "Take a short nap",
      "Light stretching"
    ]
  },

  shortnessofbreath: {
    causes: ["Asthma (possible)", "Anxiety", "Allergy", "Overexertion"],
    precautions: [
      "Avoid dusty areas",
      "Sit upright",
      "Do not overexert"
    ],
    remedies: [
      "Slow breathing exercise",
      "Steam inhalation",
      "Warm water"
    ]
  }
};

// When user clicks Analyze Button
btn.addEventListener("click", () => {
  const userInput = input.value.trim().toLowerCase();
  output.innerHTML = "";

  if (!userInput) {
    output.innerHTML = "<p>Please enter your symptoms.</p>";
    return;
  }

  output.innerHTML = "<p>🧠 Analyzing your symptoms...</p>";

  setTimeout(() => {
    let found = false;
    let html = "";

    // Check each symptom
    for (let symptom in symptomDatabase) {
      if (userInput.includes(symptom)) {
        const info = symptomDatabase[symptom];
        html += `
          <h3>🩺 Symptom detected: ${symptom.charAt(0).toUpperCase() + symptom.slice(1)}</h3>

          <h4>Possible Causes:</h4>
          <ul>${info.causes.map(c => `<li>${c}</li>`).join("")}</ul>

          <h4>Precautions:</h4>
          <ul>${info.precautions.map(p => `<li>${p}</li>`).join("")}</ul>

          <h4>Home Remedies:</h4>
          <ul>${info.remedies.map(r => `<li>${r}</li>`).join("")}</ul>
          <hr>
        `;
        found = true;
      }
    }

    if (!found) {
      html = `
        <p>⚠️ Sorry, I don't have data for your symptoms yet.</p>
        <p>Try something like: <b>fever</b>, <b>headache</b>, <b>cold</b>, <b>stomach pain</b>, <b>cough</b>, etc.</p>
      `;
    }

    output.innerHTML = html;
  }, 1200);
});
