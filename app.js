const express = require("express");
const app = express();
var SSH = require('simple-ssh');
const { SerialPort } = require('serialport');

// Code to determine the path of the rf module - should be /dev/tty.usbserial-017543DC
// SerialPort.list().then(ports => {
//   ports.forEach(function(port) {
//       console.log(port.path)
//   })
// })
rf_port = "/dev/tty.usbserial-017543DC"

const port = new SerialPort({ path: rf_port, baudRate: 57600 }, function (err) {
  if (err) {
    return console.log("Error while opening port at " + rf_port)
  } else {
    return console.log("Port opened successfully at " + rf_port)
  }
})

app.use(express.json());

// Route that handles initial handshake between laptop and robot
app.post("/handshake", (req, res) => {
  // Gets body parameters from post request
  const username = req.body.params.username;
  const password = req.body.params.password;
  const ip = req.body.params.ip;
  
  // Creates new ssh connection with robot given body parameters
  var ssh = new SSH({
    host: ip,
    user: username,
    pass: password
  });

  // If ssh connection was unsuccessful, return error and break out of function
  if (ssh._c.config.host == undefined) {
    res.status(400).json({ "error": "SSH Connection unsuccessful" });
    return;
  }

  // If ssh connection is successful, change into electrical directory and run handshake.py
  ssh.exec('cd Desktop/src/electrical', {})
  .exec('python handshake.py', {}).start();

  // Runs laptop's handshake, defined in method below
  if (handshake()) {
    res.status(200);
    return;
  }
  // If handshake is unsuccessful, return error
  res.status(400).json({ "error": "Handshake unsuccessful" });
});

// Fuction to handle handshake
const handshake = async () => {
  var text = "";
  // First message sent in handshake from laptop to robot
  port.write("computer_to_robot");
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
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));