const express = require("express");
const mongoose = require("mongoose");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const cors = require("cors"); // Import the cors middleware

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

// Open serialport
const port = new SerialPort("COM4", { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

// Listen for RFID tag reads
/*parser.on("data", (tag) => {
  console.log("Received RFID tag:", tag);
  // Save the RFID tag read to MongoDB
  const rfidData = new RfidData({ tag, timestamp: new Date() });
  rfidData.save();
});*/

parser.on("data", (tag) => {
  console.log("Received RFID tag:", tag);

  /*/ Send RFID tag as part of the response
  res.json({ tag, message: "Scan successful" });*/
});

// Create express app
const app = express();

// Use the cors middleware
app.use(cors());

// ...

let currentResponse; // Variable to store the current response object

// Function to handle RFID tag reading
function handleRfidTag(tag) {
  console.log("Received RFID tag:", tag);

  // Send RFID tag as part of the response
  if (currentResponse) {
    currentResponse.json({ tag, message: "Scan successful" });
    currentResponse = null; // Reset the response object
  }
}

/*/ Route to start the RFID scan
app.get("/start-scan", (req, res) => {
  // Trigger RFID scan here if needed
  // You might need to send a signal to your Arduino to start the scan
  res.json({ message: "Scan initiated" });
});

// Route to get the RFID data
app.get("/rfid-data", (req, res) => {
  // Assign the current response object
  currentResponse = res;

  // Assuming you are still using the same SerialPort and parser setup here
  parser.on("data", (tag) => {
    handleRfidTag(tag);
  });
});

// ...*/

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
