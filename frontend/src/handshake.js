var SSH = require('simple-ssh');
const { SerialPort } = require('serialport');
var stdin = process.openStdin();

function Handshake(username, password, ip) {
    var ssh = new SSH({
        host: ip,
        user: username,
        pass: password
    });
    
    const rf_port = "/dev/tty.usbserial-017543DC"
    
    const port = new SerialPort({ path: rf_port, baudRate: 57600 }, function (err) {
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
      // Use utf8 or latin1 encoding?
      console.log('Data: ', data.toString('utf8'))
    })
    
    // Allows for use of the terminal for writing - delete when done testing
    stdin.addListener("data", function(data) {
      console.log(data.toString().trim());
      port.write(data);
    });
}