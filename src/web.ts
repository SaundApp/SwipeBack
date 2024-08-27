import { WebPlugin } from '@capacitor/core';

import type { SwipeBackPlugin } from './definitions';

export class SwipeBackWeb extends WebPlugin implements SwipeBackPlugin {
  async setAllowsBackForwardNavigationGestures(): Promise<void> {
    return;
  }
}
