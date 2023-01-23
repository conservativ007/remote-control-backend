import { mouse, providerRegistry, Region, ScreenClass } from '@nut-tree/nut-js';

export function getScreenshot() {
  async function getScreenshotF() {
    let { x, y } = await mouse.getPosition();

    let testClass = new ScreenClass(providerRegistry);
    let testRegion = new Region(x - 100, y - 100, 200, 200);
    testClass.captureRegion('1', testRegion);
  }

  getScreenshotF();
}
