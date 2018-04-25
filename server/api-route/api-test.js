(function() {


    app.post('/auth/google', function(req, res) {
        var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
        var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
        var params = {
            code: req.body.code || req.query.code || req.param("code"),
            client_id: req.body.clientId || req.query.clientId || req.param("clientId"),
            client_secret: config.GOOGLE_SECRET,
            redirect_uri: req.body.redirectUri || req.query.redirectUri || req.param("redirectUri"),
            grant_type: 'authorization_code'
        };

        // Step 1. Exchange authorization code for access token.
        request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
            var accessToken = token.access_token;
            var headers = { Authorization: 'Bearer ' + accessToken };

            // Step 2. Retrieve profile information about the current user.
            request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {

                // Step 3a. Link user accounts.
                if (req.header('Authorization')) {
                    var token = req.header('Authorization').split(' ')[1];
                    res.send({ token: token, profile: profile });

                }
            });
        });
    });



    app.get("/api/contacts", function(req, resp) {
        request.get({ url: 'https://jsonplaceholder.typicode.com/users' }, function(err, response, data) {
            if (err)
                resp.send(404)
            else
                resp.send(JSON.stringify(response));
        });
    });


})();