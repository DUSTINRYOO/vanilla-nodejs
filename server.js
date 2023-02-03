import express from "express";
import apiController from "./api/apiController.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/js", express.static("./js/"));
app.use("/css", express.static("./css/"));
app.use("/img", express.static("./img/"));
app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: "." });
});
app.post("/post", apiController);

app.listen(5000);
