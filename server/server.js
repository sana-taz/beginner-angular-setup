// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const port = 3000;

// const app = express();

// app.use(bodyParser.json());

// app.use(cors());

// app.get("/", function (req, res) {
//   res.send("hello");
// });

// app.listen(port, function () {
//   console.log("server running on host" + port);
// });
const express = require("express") ;
const routes = require("./routes") ;
const app = express();

app.get("/send", (req, res) => {
  res.send("ok");
});

if (require.main === module) {
  app.use('/api', routes)
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
} else {
  app.use(routes)
}
