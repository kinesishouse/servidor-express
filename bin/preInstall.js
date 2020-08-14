const Service = require('node-linux').Service;

// Create a new service object
const svc = new Service({
    name:'servidor-express',
    description: 'KinesisHouse web server.',
    script: '/srv/servidor-express/bin/www',
    env: [{
        name: "PORT",
        value: 80
    }]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();
