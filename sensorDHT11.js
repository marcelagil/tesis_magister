var http = require("http");
var fs =  require("fs");
var sensor = require('node-dht-sensor');

var server = http.createServer(function(request, response) {
    
	sensor.read(11, 4, function(err, temperature, humidity) {
	    if (!err) {
	        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
	            'humidity: ' + humidity.toFixed(1) + '%'
	        );
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('temp: ' + temperature.toFixed(1) + '°C ');
    response.write('humidity: ' + humidity.toFixed(1) + '%');
    response.end();
    }
    
    
    else {
		console.log(err);
		    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Sin señal");
    response.end();
	}
})

});
server.listen(8080);
