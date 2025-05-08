export const getDraw = (req, res) => {
  res.render("draw", { pageTitle: "Test Draw" });
};

export const getFabric = (req, res) => {
  res.render("fabric", { pageTitle: "Test Fabric" });
};

export const getJsDraw = (req, res) => {
  res.render("js-draw", { pageTitle: "Test JS Draw" });
};
