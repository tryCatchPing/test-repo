const canvas = new fabric.Canvas("c", {
  backgroundColor: "#fafafa",
});

const txt = new fabric.Text("Hello, Fabric.js!", {
  left: 150,
  top: 200,
  fontSize: 48,
  fill: "teal",
});

canvas.add(txt);
txt.center();

const text = new fabric.Text("Fabric.JS", {
  cornerStyle: "round",
  cornerStrokeColor: "blue",
  cornerColor: "lightblue",
  cornerStyle: "circle",
  padding: 10,
  transparentCorners: false,
  cornerDashArray: [2, 2],
  borderColor: "orange",
  borderDashArray: [3, 1, 3],
  borderScaleFactor: 2,
});

canvas.add(text);
canvas.centerObject(text);
canvas.setActiveObject(text);
canvas.requestRenderAll();
