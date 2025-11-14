console.log("✅ AI Medical Assistant Loaded!");

// Reference elements
const btn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");
const input = document.getElementById("symptoms");

// Offline symptom database
const symptomDatabase = {
  fever: {
    causes: ["Viral infection", "Flu", "Heat exhaustion"],
    precautions: ["Rest well", "Stay hydrated", "Monitor temperature"],
    remedies: ["Paracetamol", "Cold compress", "Drink warm fluids"]
  },
  headache: {
    causes: ["Migraine", "Dehydration", "Stress or screen strain"],
    precautions: ["Avoid bright light", "Take breaks", "Drink water"],
    remedies: ["Peppermint tea", "Massage temples", "Cold compress"]
  },
  cough: {
    causes: ["Cold", "Allergy", "Throat infection"],
    precautions: ["Avoid cold drinks", "Use humidifier", "Rest throat"],
    remedies: ["Honey warm water", "Ginger tea", "Steam inhalation"]
  },
  cold: {
    causes: ["Virus", "Weather change"],
    precautions: ["Stay warm", "Avoid chilled items"],
    remedies: ["Ginger tea", "Steam inhalation", "Warm soup"]
  },
  stomachpain: {
    causes: ["Gas", "Indigestion", "Food poisoning"],
    precautions: ["Avoid oily food", "Eat light", "Hydrate"],
    remedies: ["Mint tea", "Hot water bag", "Buttermilk"]
  },
  sorethroat: {
    causes: ["Infection", "Cold", "Allergy"],
    precautions: ["Avoid cold drinks", "Rest voice"],
    remedies: ["Salt-water gargle", "Honey lemon water", "Warm soup"]
  },
  vomiting: {
    causes: ["Food poisoning", "Indigestion", "Motion sickness"],
    precautions: ["Avoid heavy meals", "Sip water slowly"],
    remedies: ["ORS solution", "Ginger tea", "Banana"]
  },
  diarrhoea: {
    causes: ["Contaminated food", "Virus", "Food allergy"],
    precautions: ["Avoid milk & spicy food", "Stay hydrated"],
    remedies: ["ORS", "Curd rice", "Coconut water"]
  },
  backpain: {
    causes: ["Muscle strain", "Poor posture", "Stress"],
    precautions: ["Avoid heavy lifting", "Sit properly"],
    remedies: ["Hot pack", "Light stretching", "Gentle massage"]
  },
  chestpain: {
    causes: ["Acidity", "Muscle strain", "Stress/anxiety"],
    precautions: ["Avoid spicy food", "Do not overexert"],
    remedies: ["Drink cold milk", "Relaxation breathing"]
  },
  dizziness: {
    causes: ["Low BP", "Dehydration", "Weakness"],
    precautions: ["Stand up slowly", "Avoid skipping meals"],
    remedies: ["ORS", "Eat something sweet", "Drink water"]
  },
  rashes: {
    causes: ["Allergy", "Skin irritation", "Heat rash"],
    precautions: ["Avoid scratching", "Use clean clothes"],
    remedies: ["Aloe vera gel", "Cold compress", "Calamine lotion"]
  },
  earpain: {
    causes: ["Infection", "Cold", "Earwax buildup"],
    precautions: ["Avoid inserting objects", "Keep ear dry"],
    remedies: ["Warm compress", "Steam inhalation"]
  },
  eyeirritation: {
    causes: ["Dust allergy", "Screen strain"],
    precautions: ["Avoid rubbing eyes", "Take screen breaks"],
    remedies: ["Cold water splash", "Rose water drops"]
  },
  legcramps: {
    causes: ["Dehydration", "Low magnesium", "Over-exercise"],
    precautions: ["Stay hydrated", "Stretch regularly"],
    remedies: ["Warm compress", "Banana", "Gentle massage"]
  }
};

// Main button logic
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

    for (let symptom in symptomDatabase) {
      if (userInput.includes(symptom)) {
        const info = symptomDatabase[symptom];

        html += `
          <h3>🩺 Symptom: ${symptom}</h3>

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
        <p>⚠️ No data found for your symptoms.</p>
        <p>Try symptoms like: fever, headache, stomachpain, cough, dizziness, vomiting etc.</p>
      `;
    }

    output.innerHTML = html;
  }, 1000);
});
