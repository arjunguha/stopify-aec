"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("browserfs/index");
// import {BFSCallback} from "/Users/nicoleandrews/Documents/PLASMA Lab/stopify-benchmarks/java/browserfs-candy/src/main/java/def/browserfs";
var GoogleDriveFileSystem = index_1.FileSystem.GoogleDrive;
function init(cb) {
    if (GoogleDriveFileSystem.isAvailable()) {
        var oauthToken;
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
        onApiLoad();
    }
    else {
        cb();
    }
}
exports.init = init;
function isAvailable() {
    return true;
}
exports.isAvailable = isAvailable;
function getName() {
    return 'Google Drive';
}
exports.getName = getName;
function isReadOnly() {
    return false;
}
exports.isReadOnly = isReadOnly;
function supportsProps() {
    return false;
}
exports.supportsProps = supportsProps;
function supportsSynch() {
    return false;
}
exports.supportsSynch = supportsSynch;
function supportsSymlinks() {
    return false;
}
exports.supportsSymlinks = supportsSymlinks;
function supportsLinks() {
    return false;
}
exports.supportsLinks = supportsLinks;
// export function empty(mainCb: BFSOneArgCallback): void {
//   mainCb();
// }
function stat(p, isLstat, cb) {
    // Ignore lstat case -- GoogleDrive doesn't support symlinks
    // Stat the file
    if (p === '/') {
        // assume the root directory exists
        var stats = new Stats(FileType.DIRECTORY, 0, 0);
        return cb(null, stats);
    }
    else {
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'",
        });
        request.execute(function (resp) {
            if (typeof resp.items !== 'undefined' && typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                var id = resp.items[0].id;
                var secondRequest = gapi.client.drive.files.get({
                    fileId: id
                });
                secondRequest.execute(function (resp) {
                    var type = resp.mimeType;
                    if (type === 'application/vnd.google-apps.folder') {
                        var stats = new Stats(FileType.DIRECTORY, 0, 0);
                        return cb(null, stats);
                    }
                    else {
                        var stats = new Stats(FileType.FILE, 0, 0);
                        return cb(null, stats);
                    }
                });
            }
            else {
                return cb(ApiError.ENOENT(p));
            }
        });
    }
}
exports.stat = stat;
