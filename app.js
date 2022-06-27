const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const profileRoute = require("./routes/ProfileRoute");
//dotenv require call
require("dotenv").config();
const PORT = process.env.PORT || 5000;
//database connection
require("./db");
//request purse

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_NAME));

//application all routes handle
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/profile", profileRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("home page");
  });
}

//listening server
app.listen(PORT, () => {
  console.log(`the server is running on port http://localhost:${PORT}`);
});

//api routes

//user routes
//for signup-mothod:post url:"api/user/signup"
//for login-mothod:post url:"api/user/login"
//for login-mothod:post url:"api/user/logout"
//for authenticate user-mothod:get url:"api/user/get"
//for all user-mothod:get url:"api/user/getall"

//profile
//for profile upload:post url:"api/profile"
//for profile-mothod:get url:"api/profile"

//post
//for post status -method:post url:"api/post/status"
//for get athentication status -method:get url:"api/post/status"
//for get all status -method:get url:"api/post/allstatus"
//for post like -method:put url:"api/post/likes/:id"

//for post comment -method:post url:"api/post/comment/:id"
//for post replay -method:post url:"api/post/replay/:id"
//for post delete -method:delete url:"api/post/delete/:id"
