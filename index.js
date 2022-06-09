const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/parc").then(() => {
  console.log("connected to database");
});

//routes
const userRoutes = require("./routes/user.routes");
const vehiculeRouter = require("./routes/vehicul.routes");
const missionRouter = require("./routes/mission.routes");
const depensesRouter = require("./routes/depenses.routes");
const ficheTechRouter = require("./routes/ficheTech.routes");
const reclamationRouter = require("./routes/reclamation.routes");

app.use("/user", userRoutes);
app.use("/vehicule", vehiculeRouter);
app.use("/mission", missionRouter);
app.use("/depenses", depensesRouter);
app.use("/ficheTech", ficheTechRouter);
app.use("/reclamation", reclamationRouter);
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
const initFn = () => {
  console.log("App is running on port 3500");
};
app.listen(3500, initFn);
