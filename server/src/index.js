const express = require("express");
const mongoose = require("mongoose");
const MessageModel = require("./MessageModel");

process.on("SIGINT", () => {
  console.log("Caught interrupt signal");
  process.exit();
});

process.on("SIGTERM", () => {
  console.log("Caught interrupt signal");
  process.exit();
});

(async () => {
  const app = express();

  console.log("Connecting to DB");
  await mongoose.connect("mongodb://mongodb:27017/tom", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected");

  app.get("/", (req, res) => {
    console.log("Got a request");
    res.json({ message: "Hey, I'm Tom, the API" });
  });

  app.post("/", async (req, res) => {
    console.log("Got a request");
    const message = new MessageModel({ sentence: "Hey im a new post!" });
    const result = await message.save();
    res.json({ message: "Hey, I saved a post", result });
  });

  app.listen(3000, () => {
    console.log("le serveur a démarré");
  });
})();
