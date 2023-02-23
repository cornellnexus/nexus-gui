const { SerialPort } = require('serialport');
var stdin = process.openStdin();

rf_port = "/dev/tty.usbserial-017543DC"
// Code to determine the path of the rf module - should be /dev/tty.usbserial-017543DC
// SerialPort.list().then(ports => {
//   ports.forEach(function(port) {
//       console.log(port.path)
//   })
// })

const port = new SerialPort({ path: rf_port, baudRate: 9600 }, function (err) {
  if (err) {
    return console.log("Error while opening port at " + rf_port)
  } else {
    return console.log("Port opened successfully at " + rf_port)
  }
})

port.on('error', function(err)  {
  console.log('Error: ', err.message);
})

port.on('data', function (data) {
  console.log('Data: ', data.toString('utf8'))
})
 
stdin.addListener("data", function(data) {
  console.log(data.toString().trim());
  port.write(data);
});