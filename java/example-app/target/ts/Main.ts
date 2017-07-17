/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
export class Main {
    public static main(args : string[]) {
        let x : java.util.HashMap<string, number> = <any>(new java.util.HashMap<string, number>());
        GoogleDriveFileSystem.init(() => {
            return;
        });
        let available : boolean = GoogleDriveFileSystem.isAvailable();
        console.info("available is: " + available);
        let readOnly : boolean = GoogleDriveFileSystem.isReadOnly();
        console.info("read only is: " + readOnly);
        let name : string = GoogleDriveFileSystem.getName();
        console.info("name is: " + name);
        console.info("supports props is: " + GoogleDriveFileSystem.supportsProps());
        console.info("supports synch is: " + GoogleDriveFileSystem.supportsSynch());
        console.info("supports sym links is: " + GoogleDriveFileSystem.supportsSymlinks());
        console.info("supports links is: " + GoogleDriveFileSystem.supportsLinks());
        let consumer : (p1: Stats) => void = (Stats) => java.lang.System.out.print(" " + Stats);
        GoogleDriveFileSystem.stat("foo/empty.txt", false, consumer);
    }
}
Main["__class"] = "Main";




Main.main(null);
