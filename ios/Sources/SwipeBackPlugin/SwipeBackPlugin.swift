import Foundation
import Capacitor

@objc(SwipeBackPlugin)
public class SwipeBackPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "SwipeBackPlugin"
    public let jsName = "SwipeBack"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "setAllowsBackForwardNavigationGestures", returnType: CAPPluginReturnPromise)
    ]

    @objc func setAllowsBackForwardNavigationGestures(_ call: CAPPluginCall) {
        let allow = call.getBool("allow") ?? false
    
        DispatchQueue.main.async {
            if !allow {
                self.bridge?.webView?.backForwardList.perform(Selector(("_removeAllItems")))
            }
        }

        call.resolve()
    }
}
