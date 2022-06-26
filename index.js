const express = require("express");
const { generateRandomData } = require("./helperFunction");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to faker api");
});

app.get("/data", (req, res) => {
  res.send(generateRandomData());
});

app.get("/filter-data", (req, res) => {
  const filterData = [
    {
      minSalary: 0,
      maxSalary: 9999,
      designation: "Government Watchman",
    },
    {
      minSalary: 9999,
      maxSalary: 999999,
      designation: "SDE 1",
    },
    {
      minSalary: 999999,
      maxSalary: 99999999,
      designation: "SDE 2",
    },
    {
      minSalary: 99999999,
      maxSalary: 9999999999,
      designation: "SDE 2",
    },
  ];
  res.send(filterData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
