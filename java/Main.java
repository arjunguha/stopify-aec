import def.browserfs.GoogleDriveFileSystem;
public class Main {
	public static void main(String[] args) {

		GoogleDriveFileSystem.init((name, array)->{
			return;
		});
	}
}
