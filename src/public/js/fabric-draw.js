const canvas = new fabric.Canvas("c", {
  backgroundColor: "#fafafa",
  isDrawingMode: false,
  width: 600,
  height: 600,
});

canvas.freeDrawingBrush.width = 4;
canvas.freeDrawingBrush.color = "#333";

const penBtn = document.getElementById("btn-draw");
const clearBtn = document.getElementById("btn-clear");

penBtn.addEventListener("click", () => {
  canvas.isDrawingMode = !canvas.isDrawingMode;
  penBtn.textContent = canvas.isDrawingMode ? "✋ Drawing On" : "🖊️ Pen Mode";
});

clearBtn.addEventListener("click", () => {
  canvas.clear();
  canvas.backgroundColor = "#fafafa";
  canvas.renderAll();
  canvas.isDrawingMode = false;
  penBtn.textContent = "🖊️ Pen Mode";
});
