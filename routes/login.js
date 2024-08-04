let express = require("express");
let router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<form onsubmit="formHandler(event)" action="/message" method="POST"><input id="username" type="text" name"title"><button type="submit">Login</button></form>
    <script>
    function formHandler(event){
    let username=document.getElementById("username").value;
        localStorage.setItem("username",username )
    }
    </script>`
  );
});
router.post("/message", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
