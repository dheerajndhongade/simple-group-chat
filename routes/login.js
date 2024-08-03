let express = require("express");
let router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<form action="/" method="POST"><input type="text" name="title"><button type="submit">Login</button></form>
    <script>
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        let title = document.getElementById('title').value;
        localStorage.setItem('title', title);
        console.log(title)
        console.log("dfghj")
      });
    </script>`
  );
});

module.exports = router;
