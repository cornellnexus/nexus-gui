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
  
app.post("/handshake", (req, res) => {
  const username = req.body.params.username;
  const password = req.body.params.password;
  const ip = req.body.params.ip;
  
  var ssh = new SSH({
    host: ip,
    user: username,
    pass: password
  });

  if (ssh._c.config.host == undefined) {
    res.status(400).json({ "error": "SSH Connection unsuccessful" });
    return;
  }
  ssh.exec('cd Desktop/src/electrical', {})
  .exec('python handshake.py', {}).start();

  if (handshake()) {
    res.status(200);
    return;
  }
  res.status(400).json({ "error": "Handshake unsuccessful" });
});

const handshake = async () => {
  var text = "";
  port.write("computer_to_robot");
  var endTime = Date.now() + 5000;

  port.on('data', function (data) {
    text = data;
  })

  while (endTime > Date.now()) {
      if (text == "robot_to_computer") {
        return true;
      }
  }
  
  return false;
};
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));