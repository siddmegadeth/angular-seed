(function() {
    http = module.exports = require("http");
    express = module.exports = require("express");
    app = module.exports = express();
    request = module.exports = require('request');
    bodyParser = module.exports = require('body-parser');
    cors = module.exports = require('cors');
    log = module.exports = console.log.bind(console);
    config = module.exports = {
        // App Settings
        GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'nLvsl29s18EkJikUskW1_hfx'
    };

})()