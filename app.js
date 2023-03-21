const express = require("express");
const app = express();
const { SerialPort } = require('serialport');
const { Client } = require('ssh2');

// Code to determine the path of the rf module - should be /dev/tty.usbserial-017543DC
// SerialPort.list().then(ports => {
//   ports.forEach(function(port) {
//       console.log(port.path)
//   })
// })

// Opens a port at specified directory
rf_port = "/dev/tty.usbserial-017543DC"
const port = new SerialPort({ path: rf_port, baudRate: 57600 }, function (err) {
  if (err) {
    return console.log("Error while opening port at " + rf_port)
  } else {
    return console.log("Port opened successfully at " + rf_port)
  }
})

app.use(express.json());

const conn = new Client();
var username;
var password;
var ip;

const reconnect = () => {
  conn.connect({
    host: ip,
    port: 22,
    username: username,
    password: password,
    // Test if lines below work to keep connection alive for longer
    keepaliveCountMax: 10,
    keepaliveInterval: 10000
  });
}

// Route that handles initial handshake between laptop and robot
app.post("/handshake", (req, res) => {
  // Gets body parameters from post request
  username = req.body.params.username;
  password = req.body.params.password;
  ip = req.body.params.ip;

  // Creates new ssh connection with robot given body parameters
  conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec('cd Desktop/src/electrical; sudo python handshake.py', (err, stream) => {
      if (err) throw err;

      // Runs laptop's handshake, defined in method below
      if (handshake2()) {
        res.status(200);
        return;
      }

      // If handshake is unsuccessful, return error
      res.status(400).json({ "error": "Handshake unsuccessful" });

      stream.on('close', (code, signal) => {
        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      }).on('data', (data) => {
        console.log('STDOUT: ' + data);
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });

    });
  }).connect({
    host: ip,
    port: 22,
    username: username,
    password: password,
    // Test if lines below work to keep connection alive for longer
    keepaliveCountMax: 10,
    keepaliveInterval: 10000
  });
});

// Fuction to handle handshake
const handshake = () => {
  console.log("LAPTOP - Running JS handshake")
  var text = "";
  // First message sent in handshake from laptop to robot
  port.write("computer_to_robot");
  console.log("LAPTOP - Message sent")
  var endTime = Date.now() + 5000;

  // If the laptop's port recieves data, set text equal to that data
  port.on('data', function (data) {
    text = data;
  })

  // Checks if laptop recieves message from robot within 5 seconds of sending out initial message
  while (endTime > Date.now()) {
      if (text == "robot_to_computer") {
        // Sends success to robot to signal that handshake was successful
        port.write("success");
        return true;
      }
  }
  return false;
};

const handshake2 = () => {
  console.log("LAPTOP - Running JS handshake")
  port.on('data', function (data) {
    console.log(data)
    return true;
  })
  return false;
}

// Route that passes data from robot to React app
app.post("/port", (req, res) => {

});

// Route that executes shell commands on robot in script tab of React app
// TODO: IMPLEMENT RECONNECT FUNCTION IF SSH CONNECTION IS DROPPED
app.post("/shell", (req, res) => {
  const command = req.body.params.command;

  conn.exec(command, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      res.status(200).json({"Output": "Input stream closed with code " + code + " and signal " + signal})
    }).on('data', (data) => {
      res.status(200).json({"Output": data})
    }).stderr.on('data', (data) => {
      res.status(400).json({"Error": "Could not run command - " + data})
    });
  });
});
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));