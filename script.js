document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const symptoms = document.getElementById("symptoms").value.trim();
  const output = document.getElementById("output");

  if (!symptoms) {
    output.innerHTML = "<p>Please describe your symptoms first.</p>";
    return;
  }

  output.innerHTML = "<p>🧠 Analyzing your symptoms...</p>";

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms })
    });

    const data = await response.json();
    output.innerHTML = <div>${data.analysis}</div>;
  } catch (err) {
    console.error(err);
    output.innerHTML = "<p>⚠ Something went wrong. Please try again later.</p>";
  }
});
