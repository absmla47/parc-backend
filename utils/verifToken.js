const jwt = require("jsonwebtoken");

const verifToken = (req, res, next) => {
  if (!req.headers["access-token"]) {
    res.json({ success: "false", message: "vous devez etre authentifier" });
  } else {
    let verif = jwt.verify(req.headers["access-token"], "MYTOKENSECRET");
    if (!verif) {
      res.json({ success: "false", message: "token invalide" });
    } else {
      next();
    }
  }
};

module.exports = verifToken;
