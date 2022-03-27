const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
mongoose.connect("mongodb://localhost:27017/parc").then(() => {
  console.log("connected to database");
});

//routes
const userRoutes = require("./routes/user.routes");
const vehiculeRouter = require("./routes/vehicul.routes");
const missionRouter = require("./routes/mission.routes");

app.use("/user", userRoutes);
app.use("/vehicule", vehiculeRouter);
app.use("/mission", missionRouter);
const initFn = () => {
  console.log("App is running on port 3500");
};
app.listen(3500, initFn);
