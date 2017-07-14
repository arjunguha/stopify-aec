"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("browserfs/index");
var GoogleDriveFileSystem;
(function (GoogleDriveFileSystem_1) {
    var GoogleDriveFileSystem = index_1.FileSystem.GoogleDrive;
    function init(cb) {
        if (GoogleDriveFileSystem.isAvailable()) {
            var oauthToken;
            var req = new XMLHttpRequest();
            req.open('GET', '/test/fixtures/gdfs/api.js');
            req.onerror = function (e) {
                console.error(req.statusText);
            };
            req.onload = function (e) {
                if (!(req.readyState === 4 && req.status === 200)) {
                    console.error(req.statusText);
                }
                eval(req.response);
                onApiLoad();
            };
            req.send();
            // Use the API Loader script to load google.picker and gapi.auth.
            var onApiLoad = function () {
                // load the APIs
                gapi.load('client:auth', onAuthApiLoad);
            };
            var onAuthApiLoad = function () {
                // The Client ID obtained from the Google Developers Console. Replace with your own Client ID.
                var clientId = "576255310053-nl3vla4sgg0cmu9ieb3l79fca2iuhrcs.apps.googleusercontent.com";
                // Scope to use to access user's items.
                var scope = ['https://www.googleapis.com/auth/drive'];
                window.gapi.auth.authorize({
                    'client_id': clientId,
                    'scope': scope,
                    'immediate': false
                }, 
                // log the user in
                handleAuthResult);
            };
            var handleAuthResult = function (authResult) {
                if (authResult && !authResult.error) {
                    oauthToken = authResult.access_token;
                    gapi.client.load('drive', 'v2', function () {
                        var fs = new GoogleDriveFileSystem(oauthToken);
                        fs.empty(function () {
                            cb();
                        });
                    });
                }
            };
        }
        else {
            cb();
        }
    }
    GoogleDriveFileSystem_1.init = init;
})(GoogleDriveFileSystem = exports.GoogleDriveFileSystem || (exports.GoogleDriveFileSystem = {}));
