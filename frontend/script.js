const BACKEND_URL = "https://TU-SERVICIO-RENDER.onrender.com";

const output = document.getElementById("output");
const button = document.getElementById("loadBtn");

button.addEventListener("click", async () => {
  output.textContent = "Consultando backend...";

  try {
    const response = await fetch(`${BACKEND_URL}/api/message`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});
