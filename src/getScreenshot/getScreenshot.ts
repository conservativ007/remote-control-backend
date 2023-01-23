import { mouse, providerRegistry, Region, ScreenClass } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export function getScreenshot(ws, action) {
  async function getScreenshotF(ws, action) {
    let { x, y } = await mouse.getPosition();

    let testClass = new ScreenClass(providerRegistry);
    let testRegion = new Region(x - 100, y - 100, 200, 200);

    let { data, width, height } = await testClass.grabRegion(testRegion);

    new Jimp({ data, width, height }, async (err, image) => {
      let bufferString = await image.getBase64Async(Jimp.MIME_PNG);
      let wrongChunkOfString = 'data:image/png;base64,';

      let correctStr = '';
      if (bufferString.startsWith(wrongChunkOfString)) {
        correctStr = bufferString.slice(wrongChunkOfString.length);
      }
      ws.send(`${action} ${correctStr !== '' ? correctStr : bufferString}`);
    });
  }

  getScreenshotF(ws, action);
}
