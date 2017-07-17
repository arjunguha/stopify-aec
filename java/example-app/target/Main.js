"use strict";
/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
var Main = (function () {
    function Main() {
    }
    Main.main = function (args) {
        var x = (new java.util.HashMap());
        GoogleDriveFileSystem.init(function () {
            return;
        });
        var available = GoogleDriveFileSystem.isAvailable();
        console.info("available is: " + available);
        var readOnly = GoogleDriveFileSystem.isReadOnly();
        console.info("read only is: " + readOnly);
        var name = GoogleDriveFileSystem.getName();
        console.info("name is: " + name);
        console.info("supports props is: " + GoogleDriveFileSystem.supportsProps());
        console.info("supports synch is: " + GoogleDriveFileSystem.supportsSynch());
        console.info("supports sym links is: " + GoogleDriveFileSystem.supportsSymlinks());
        console.info("supports links is: " + GoogleDriveFileSystem.supportsLinks());
        var consumer = function (Stats) { return java.lang.System.out.print(" " + Stats); };
        GoogleDriveFileSystem.stat("foo/empty.txt", false, consumer);
    };
    return Main;
}());
exports.Main = Main;
Main["__class"] = "Main";
Main.main(null);
//# sourceMappingURL=Main.js.map