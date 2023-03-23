const connectDB = require('./config/dbConnect');
const express = require("express");
const app = express();

//veiw engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//GET /
app.get("/", (req, res) => {
  res.render("home");
});

//GET/ upload
app.get("/upload", (req, res) => {
  res.render("upload");
});
//POST /upload
app.post("/upload", async (req, res) => {
  res.render("images");
});

//GET /images
app.get("/images", async (req, res) => {
  //read all files in the uploads folder
  res.render("images");
});

// Start the server
connectDB()
.then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port);
})
.catch(error => {
  console.log(error);
})


