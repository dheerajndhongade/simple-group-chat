let express = require("express");
let app = express();
let loginRouter = require("./routes/login");

app.use(loginRouter);

app.listen(4000, () => {
  console.log("It's running bitch");
});
