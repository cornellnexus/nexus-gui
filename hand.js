const express = require("express");
const app = express();
const { SerialPort } = require('serialport');
const { NodeSSH } = require('node-ssh')

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

console.log("Running JS handshake")
  var text = "";
  // First message sent in handshake from laptop to robot
  port.write("computer_to_robot");
  console.log("Message sent")
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
        console.log("TRUE")
      }
  }
  console.log("False")