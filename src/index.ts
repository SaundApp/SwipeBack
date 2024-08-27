import { registerPlugin } from '@capacitor/core';

import type { SwipeBackPlugin } from './definitions';

const SwipeBack = registerPlugin<SwipeBackPlugin>('SwipeBack', {
  web: () => import('./web').then(m => new m.SwipeBackWeb()),
});

export * from './definitions';
export { SwipeBack };
