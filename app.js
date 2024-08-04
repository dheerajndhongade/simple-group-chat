let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let loginRouter = require("./routes/login");
let chatRouter = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(chatRouter);

app.listen(4000, () => {
  console.log("It's running bitch");
});
