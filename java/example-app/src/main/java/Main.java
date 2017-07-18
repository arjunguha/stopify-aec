import def.browserfs.BFSCallback;
import def.browserfs.Stats;
import def.browserfs.GoogleDriveCandy;
import java.util.function.Consumer;

public class Main {
	public static void main(String[] args) {
        java.util.HashMap<String,Integer> x = new java.util.HashMap<String,Integer>();

		GoogleDriveCandy.init(() -> {
			System.out.println("initialized");
			Consumer<Stats> consumer= Stats-> System.out.println(" "+Stats);
		GoogleDriveCandy.stat("foo/empty.txt", false, consumer);
		return;
			
		});
		Boolean available = GoogleDriveCandy.isAvailable();
		System.out.println("available is: " + available);
		// Boolean readOnly = GoogleDriveCandy.isReadOnly();
		// System.out.println("read only is: " + readOnly);
		// String name = GoogleDriveCandy.getName();
		// System.out.println("name is: " + name);
		// System.out.println("supports props is: " + GoogleDriveCandy.supportsProps());
		// System.out.println("supports synch is: " + GoogleDriveCandy.supportsSynch());
		// System.out.println("supports sym links is: " + GoogleDriveCandy.supportsSymlinks());
		// System.out.println("supports links is: " + GoogleDriveCandy.supportsLinks());
		
	}
}
