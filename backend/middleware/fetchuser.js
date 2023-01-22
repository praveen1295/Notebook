var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRETE_KEY;

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  // console.log(!token);
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    console.log("first");
    const data = jwt.verify(token, JWT_SECRET);
    // console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
