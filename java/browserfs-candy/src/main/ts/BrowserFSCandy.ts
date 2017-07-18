import { FileSystem } from "browserfs/index";
import * as Stats from "browserfs/core/node_fs_stats";
import * as path from "path";
// var path = require('path');

var gfs;

// export function init(cb: () => void): void {

//     console.log("HI");
// }

  export function init(cb: () => void): void {
    if (FileSystem.GoogleDrive.isAvailable()) {
        var oauthToken: any;        

        // Use the API Loader script to load google.picker and gapi.auth.
        var onApiLoad = () => {
            // load the APIs
            gapi.load('client:auth', onAuthApiLoad);
        };

        var onAuthApiLoad = () => {
            // The Client ID obtained from the Google Developers Console. Replace with your own Client ID.
            var clientId = "576255310053-nl3vla4sgg0cmu9ieb3l79fca2iuhrcs.apps.googleusercontent.com"
            // Scope to use to access user's items.
            var scope = ['https://www.googleapis.com/auth/drive'];

            ( < any > window).gapi.auth.authorize({
                    'client_id': clientId,
                    'scope': scope,
                    'immediate': false
                },
                // log the user in
                handleAuthResult);
        };

        var handleAuthResult = (authResult: any) => {
            if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                gapi.client.load('drive', 'v2', () => {
                    gfs = new FileSystem.GoogleDrive(oauthToken);
                    gfs.empty(() => {
                        cb();
                    });
                });
            }
        };

        onApiLoad();
    } else {
        throw new Error("error");
    }
}

  export function isAvailable(): boolean {
    return true;
    // isAvailable();
  }

// export function getName(): string {
//     return 'Google Drive';
//     // getName();
//   }

//   export function isReadOnly(): boolean {
//     return false;
//     // isReadOnly();
//   }

//   export function supportsProps(): boolean {
//     return false;
//     // supportsProps();
//   }

//   export function supportsSynch(): boolean {
//     return false;
//     // supportsSynch();
//   }

//   export function supportsSymlinks(): boolean {
//     return false;
//     // supportsSymlinks();
//   }

//   export function supportsLinks(): boolean {
//     return false;
//   }

  // export function empty(mainCb: BFSOneArgCallback): void {
  //   mainCb();
  // }

   export function stat(p: string, isLstat: boolean | null, cb: (Stats) => void): void {
    gfs.stat(p, null, (err, s) => cb(s));
  }
