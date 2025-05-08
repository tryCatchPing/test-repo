import express from "express";
import rootRouter from "./routers/rootRouter";

const PORT = 3000;

const app = express();

app.use(express.json());

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", rootRouter);

app.listen(PORT, (req, res) => {
  console.log(`⚡️ Server is running on http://localhost:${PORT}`);
});
