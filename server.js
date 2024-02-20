const express = require("express");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to the serial port
const port = new SerialPort("COM4", { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

// Define a variable to store the RFID tag temporarily
let rfidData = null;

parser.on("data", (tag) => {
  console.log("Received RFID tag:", tag);

  // Store the RFID tag data in the variable
  rfidData = tag;
});

// Endpoint to get the last received RFID tag
app.get("/api/rfid", (req, res) => {
  // Send the stored RFID tag data as part of the response
  res.json({ tag: rfidData, message: "Last RFID tag read" });
});

// Start the server
const portNumber = 3000;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
