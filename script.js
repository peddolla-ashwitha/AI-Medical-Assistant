document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const symptoms = document.getElementById("symptoms").value.trim();
  const output = document.getElementById("output");

  if (!symptoms) {
    output.innerHTML = "<p>Please describe your symptoms first.</p>";
    return;
  }

  output.innerHTML = "<p>🧠 Analyzing your symptoms...</p>";

  // Offline simulation for GitHub demo (no API key required)
  // Real AI logic can be added later using OpenAI API
  setTimeout(() => {
    output.innerHTML = `
      <h3>Possible Causes:</h3>
      <ul>
        <li>Common Cold or Mild Flu</li>
        <li>Dehydration</li>
      </ul>
      <h3>Precautions:</h3>
      <ul>
        <li>Drink warm fluids and rest well</li>
        <li>Take paracetamol for fever (if any)</li>
      </ul>
      <h3>Home Remedies:</h3>
      <ul>
        <li>Ginger tea and honey</li>
        <li>Steam inhalation 2 times a day</li>
      </ul>
      <p>⚠️ Consult a doctor if symptoms persist more than 2 days.</p>
    `;
  }, 1500);
});
