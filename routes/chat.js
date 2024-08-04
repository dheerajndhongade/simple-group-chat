let express = require("express");
let router = express.Router();
let fs = require("fs");

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    res.send(
      `<body><p>${data}</p><form onSubmit="formHandler(event)" action="/chat" method="POST"><input type="text" name="chat"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form></body>
      <script>
      function formHandler(event){
      document.getElementById("username").value=localStorage.getItem("username");
      }
      </script>
      `
    );
  });
});

router.post("/chat", (req, res, next) => {
  console.log(req.body);
  let message = req.body.chat;
  let username = req.body.username;
  fs.appendFile("message.txt", ` ${username}:${message} `, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  });
  res.redirect("/");
});

module.exports = router;
