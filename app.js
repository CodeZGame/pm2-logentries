//app.js

var pmx     = require('pmx');
var pm2     = require('pm2');


var conf    = pmx.initModule();


pm2.launchBus(function(err, bus) {
	bus.on('*', function(event, data) {
		if (event == 'process:event' && data.event == 'online') {
			console.log('Process %s restarted %s', data.process.name, data.process.restart_time);
		}
	});
});