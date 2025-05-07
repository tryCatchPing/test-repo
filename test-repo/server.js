const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Pug 설정
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

// 홈 페이지 라우트
app.get("/", (req, res) => {
  res.render("home");
});

// 드로잉 페이지 라우트
app.get("/draw", (req, res) => {
  res.render("draw");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
