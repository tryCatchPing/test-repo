import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";

const PORT = 3000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/", rootRouter);

app.use("/static", express.static("src/public"));

app.listen(PORT, (req, res) => {
  console.log(`⚡️ Server is running on http://localhost:${PORT}`);
});
