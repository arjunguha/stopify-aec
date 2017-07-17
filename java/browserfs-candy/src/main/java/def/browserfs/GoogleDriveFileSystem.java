package def.browserfs;



public class GoogleDriveFileSystem extends jsweet.lang.Object {
    native public static void init(Runnable cb);
    native public static Boolean isAvailable();
    native public static String getName();
    native public static Boolean isReadOnly();
    native public static Boolean supportsProps();
    native public static Boolean supportsSynch();
    native public static Boolean supportsSymlinks();
    native public static Boolean supportsLinks();
    native public static void empty(BFSOneArgCallback mainCb);
    native public static void stat(String p, Boolean isLstat, java.util.function.Consumer cb);
}