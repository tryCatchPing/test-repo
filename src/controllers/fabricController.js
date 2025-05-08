export const getFabricCanvas = (req, res) => {
  res.render("draw/fabric", {
    pageTitle: "Fabric.js Canvas",
  });
};

export const saveCanvas = (req, res) => {
  const { canvasState } = req.body;
  // 여기서 canvasState를 저장하는 로직 구현
  res.json({ success: true });
};

export const loadCanvas = (req, res) => {
  // 저장된 canvas 상태를 불러오는 로직 구현
  res.json({ canvasState: {} });
};
