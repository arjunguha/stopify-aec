/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
interface BFSCallback<T> {}

/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
interface BFSOneArgCallback {}

/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
interface FileSystem {}

/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
declare class GoogleDriveFileSystem {
    public static init(cb : (p1: string, p2: FileSystem[]) => void);

    public static isAvailable() : boolean;

    public constructor(oauthToken : any);

    public getName() : string;

    public isReadOnly() : boolean;

    public supportsProps() : boolean;

    public supportsSynch() : boolean;

    public supportsSymlinks() : boolean;

    public supportsLinks() : boolean;

    public empty(mainCb : BFSOneArgCallback);

    public stat(p : string, isLstat : boolean, cb : BFSCallback<any>);
}

/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
interface Stats {}


