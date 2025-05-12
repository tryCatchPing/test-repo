export const getFabricCanvas = (req, res) => {
  res.render("draw/fabric", {
    pageTitle: "Fabric.js Canvas",
  });
};

let fakeDB = { canvasState: {} };

export const saveCanvas = (req, res) => {
  const { canvasState } = req.body;
  fakeDB.canvasState = canvasState;
  return res.json({ success: true });
};

export const loadCanvas = (req, res) => {
  return res.json({ canvasState: fakeDB.canvasState });
};
