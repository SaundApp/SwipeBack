package app.saund.swipeback;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SwipeBack")
public class SwipeBackPlugin extends Plugin {

    @PluginMethod
    public void setAllowsBackForwardNavigationGestures(PluginCall call) {
        boolean allow = call.getBoolean("allow", false);

        // Not supported on Android

        call.resolve();
    }
}
