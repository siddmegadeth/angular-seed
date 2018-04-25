(function() {
    //Set PATH For Desktop/Mobile And Web Apps If Required
    app.use("/", express.static("public/web/angular-seed-contacts"));
    // app.use("/desktop", express.static("public/web/angular-seed-contacts"));
    // app.use("/mobile", express.static("public/app/angular-seed-contacts"));
    app.set('PORT', process.env.NODE_PORT || 3001);
    // app.set('host', process.env.NODE_IP || 'localhost');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

})();