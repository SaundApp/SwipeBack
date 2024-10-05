export interface SwipeBackPlugin {
  setAllowsBackForwardNavigationGestures(options: {
    allow: boolean;
  }): Promise<void>;
  clearHistory(): Promise<void>;
}
