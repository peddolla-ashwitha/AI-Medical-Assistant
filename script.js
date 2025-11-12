document.getElementById("analyzeBtn").addEventListener("click", () => {
  const symptoms = document.getElementById("symptoms").value.toLowerCase().trim();
  const output = document.getElementById("output");

  if (!symptoms) {
    output.innerHTML = "<p>Please describe your symptoms first.</p>";
    return;
  }

  output.innerHTML = "<p>🧠 Analyzing your symptoms...</p>";

  setTimeout(() => {
    let result = "";

    // Rule-based analysis
    if (symptoms.includes("fever") && symptoms.includes("cough")) {
      result = `
        <h3>Possible Causes:</h3>
        <ul>
          <li>Viral Infection (like Flu or COVID-19)</li>
          <li>Common Cold</li>
        </ul>
        <h3>Precautions:</h3>
        <ul>
          <li>Stay hydrated and rest well</li>
          <li>Use a mask and avoid crowded areas</li>
        </ul>
        <h3>Home Remedies:</h3>
        <ul>
          <li>Warm soups and herbal tea</li>
          <li>Steam inhalation 2–3 times a day</li>
        </ul>
      `;
    } else if (symptoms.includes("headache")) {
      result = `
        <h3>Possible Causes:</h3>
        <ul>
          <li>Migraine or Stress</li>
          <li>Dehydration</li>
        </ul>
        <h3>Precautions:</h3>
        <ul>
          <li>Drink enough water</li>
          <li>Avoid bright screens and loud noise</li>
        </ul>
        <h3>Home Remedies:</h3>
        <ul>
          <li>Ginger tea or coffee (small amount)</li>
          <li>Rest in a dark, quiet room</li>
        </ul>
      `;
    } else if (symptoms.includes("stomach") || symptoms.includes("vomit")) {
      result = `
        <h3>Possible Causes:</h3>
        <ul>
          <li>Food Poisoning</li>
          <li>Indigestion</li>
        </ul>
        <h3>Precautions:</h3>
        <ul>
          <li>Avoid oily/spicy food</li>
          <li>Drink ORS or coconut water</li>
        </ul>
        <h3>Home Remedies:</h3>
        <ul>
          <li>Ginger or mint tea</li>
          <li>Eat light foods like bananas or toast</li>
        </ul>
      `;
    } else if (symptoms.includes("sore throat")) {
      result = `
        <h3>Possible Causes:</h3>
        <ul>
          <li>Throat Infection</li>
          <li>Common Cold</li>
        </ul>
        <h3>Precautions:</h3>
        <ul>
          <li>Avoid cold drinks</li>
          <li>Gargle with warm salt water</li>
        </ul>
        <h3>Home Remedies:</h3>
        <ul>
          <li>Honey with warm water</li>
          <li>Ginger and turmeric milk</li>
        </ul>
      `;
    } else {
      result = `
        <h3>Possible Causes:</h3>
        <ul>
          <li>General Fatigue or Mild Viral Infection</li>
        </ul>
        <h3>Precautions:</h3>
        <ul>
          <li>Take rest and stay hydrated</li>
        </ul>
        <h3>Home Remedies:</h3>
        <ul>
          <li>Eat nutritious food and sleep well</li>
        </ul>
      `;
    }

    result += <p>⚠ Consult a doctor if symptoms persist for more than 2–3 days.</p>;
    output.innerHTML = result;
  }, 1200);
});
