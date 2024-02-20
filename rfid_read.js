const express = require("express");
const mongoose = require("mongoose");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const cors = require("cors"); // Import the cors middleware

// Create express app
const app = express();

// Use the cors middleware
app.use(cors());

// Connect to Mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/test2", {
  serverSelectionTimeoutMS: 5000,
});

// Define schema for RFID data
const rfidScheme = new mongoose.Schema({
  tag: String,
  timestamp: Date,
});

// Model for the database
const RfidData = mongoose.model("RfidData", rfidScheme);

// Listen for RFID tag reads
/*parser.on("data", (tag) => {
  console.log("Received RFID tag:", tag);
  // Save the RFID tag read to MongoDB
  const rfidData = new RfidData({ tag, timestamp: new Date() });
  rfidData.save();
});*/

// Open serialport
const port = new SerialPort("COM4", { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

parser.on("data", (tag) => {
  console.log("Received RFID tag:", tag);

  // Send RFID tag as part of the response
  /*res.json({ tag, message: "Scan successful" });*/
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
