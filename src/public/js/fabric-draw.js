const canvas = new fabric.Canvas("c", {
  backgroundColor: "#fafafa",
  isDrawingMode: false,
  width: 1000,
  height: 1000,
});

canvas.freeDrawingBrush.width = 4;
canvas.freeDrawingBrush.color = "#333";

const penBtn = document.getElementById("btn-draw");
const clearBtn = document.getElementById("btn-clear");
const saveBtn = document.getElementById("btn-save");
const loadBtn = document.getElementById("btn-load");
const messageEl = document.getElementById("message");

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

saveBtn.addEventListener("click", async () => {
  const state = canvas.toJSON();
  try {
    const result = await (
      await fetch("/draw/fabric/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ canvasState: state }),
      })
    ).json();
    const { success } = result;
    messageEl.textContent = success ? "✅ 저장 완료!" : "❌ 저장 실패…";
  } catch (err) {
    console.error(err);
    messageEl.textContent = "⚠️ 네트워크 오류";
  }
});

loadBtn.addEventListener("click", async () => {
  try {
    const { canvasState } = await (await fetch("/draw/fabric/load")).json();

    canvas.loadFromJSON(canvasState, () => {
      canvas.renderAll();
      messageEl.textContent = "✅ 불러오기 완료";
    });
  } catch (err) {
    console.error(err);
    messageEl.textContent = "⚠️ 불러오기 실패";
  }
});
