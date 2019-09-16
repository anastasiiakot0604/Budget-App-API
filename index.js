const config = require("config");
const express = require("express");
const user = require("./routes/user");
const auth = require("./routes/auth");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined!");
  process.exit(1);
}

app.use(express.json());
app.use("./api/user", user);
app.use("./api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
