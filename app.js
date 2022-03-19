const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send("this is home page");
  // res.sendFile("@file path");

  // cope with an array to view
  const arr = [
    { name: "Java", rating: "9.9" },
    { name: "Python", rating: "8.5" },
    { name: "C++", rating: "8.2" },
    { name: "C#", rating: "9.0" },
  ];

  // ejs forward to home page
  // *.ejs file need to put into "views" directary, or can not work properly.
  res.render("index.ejs", { arr });
});

// app.get("/:name", (req, res) => {
//   let { name } = req.params;
//   res.render("person.ejs", { name: name });
// });

app.get("/response", (req, res) => {
  let { fullname, age } = req.query;
  // 若前後端參數名稱都一樣，即可以直接丟key值，不用特別使用 key:value傳遞
  res.render("response.ejs", { fullname, age });
});

app.listen("3000", () => {
  console.log("server is running on server 3000");
});
