// Initialize canvas
const canvas = new fabric.Canvas("drawingCanvas", {
  isDrawingMode: true,
});

// Get control elements
const colorPicker = document.getElementById("colorPicker");
const widthSlider = document.getElementById("widthSlider");
const clearBtn = document.getElementById("clearBtn");

// Set initial brush settings
canvas.freeDrawingBrush.color = colorPicker.value;
canvas.freeDrawingBrush.width = parseInt(widthSlider.value);

// Update brush color when color picker changes
colorPicker.addEventListener("change", (e) => {
  canvas.freeDrawingBrush.color = e.target.value;
});

// Update brush width when slider changes
widthSlider.addEventListener("change", (e) => {
  canvas.freeDrawingBrush.width = parseInt(e.target.value);
});

// Clear canvas when clear button is clicked
clearBtn.addEventListener("click", () => {
  canvas.clear();
});

// Enable drawing mode
canvas.isDrawingMode = true;
