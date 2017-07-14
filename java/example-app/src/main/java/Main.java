import def.browserfs.GoogleDriveFileSystem;
import def.browserfs.BFSCallback;
import def.browserfs.Stats;
public class Main {
	public static void main(String[] args) {
        java.util.HashMap<String,Integer> x = new java.util.HashMap<String,Integer>();

		GoogleDriveFileSystem.init(() -> {
			return;
		});
		Boolean available = GoogleDriveFileSystem.isAvailable();
		System.out.println("available is: " + available);
		Boolean readOnly = GoogleDriveFileSystem.isReadOnly();
		System.out.println("read only is: " + readOnly);
		String name = GoogleDriveFileSystem.getName();
		System.out.println("name is: " + name);
		System.out.println("supports props is: " + GoogleDriveFileSystem.supportsProps());
		System.out.println("supports synch is: " + GoogleDriveFileSystem.supportsSynch());
		System.out.println("supports sym links is: " + GoogleDriveFileSystem.supportsSymlinks());
		System.out.println("supports links is: " + GoogleDriveFileSystem.supportsLinks());
		GoogleDriveFileSystem.stat("foo/empty.txt", false, );
	}
}
