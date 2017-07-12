package def.browserfs;



public class GoogleDriveFileSystem extends jsweet.lang.Object {
    native public static void init(java.util.function.BiConsumer<String,FileSystem[]> cb);
    native public static Boolean isAvailable();
    public GoogleDriveFileSystem(Object oauthToken){}
    native public String getName();
    native public Boolean isReadOnly();
    native public Boolean supportsProps();
    native public Boolean supportsSynch();
    native public Boolean supportsSymlinks();
    native public Boolean supportsLinks();
    native public void empty(BFSOneArgCallback mainCb);
    native public void stat(String p, Boolean isLstat, BFSCallback<Object> cb);
}