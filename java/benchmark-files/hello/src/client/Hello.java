package client;

import com.google.gwt.core.client.EntryPoint;

public class Hello implements EntryPoint {
  public void onModuleLoad() {
    consoleLog("Hello World!");
  }

  native void consoleLog(String msg) /*-{
    console.log(msg);
  }-*/;
}
