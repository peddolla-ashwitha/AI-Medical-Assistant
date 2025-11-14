console.log("✅ script.js loaded!");

const API_URL = "https://companionably-unterse-efrain.ngrok-free.dev/api/analyze-symptoms";

document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const symptoms = document.getElementById("symptoms").value.trim();
  const output = document.getElementById("output");

  if (!symptoms) {
    output.innerHTML = "<p>Please describe your symptoms first.</p>";
    return;
  }

  output.innerHTML = "<p>⏳ Analyzing symptoms… Please wait.</p>";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to backend.");
    }

    const data = await response.json();
    output.innerHTML = `
      <h3>Possible Causes:</h3>
      <p>${data.possible_causes}</p>
      <h3>Suggested Treatment:</h3>
      <p>${data.treatment}</p>
    `;
  } catch (error) {
    output.innerHTML = `<p style="color:red;">❌ Error: ${error.message}</p>`;
  }
});
