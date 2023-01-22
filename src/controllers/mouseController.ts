import { getMousePosition } from '../getMousePosition/getMousePosition';
import { MouseMove } from '../mouseHundlers/mouseMove';
import { providerRegistry, Region, ScreenClass } from '@nut-tree/nut-js';

export function mouseController(data, ws): string {
  let mouseMove = new MouseMove();

  let action = data.toString().split(' ')[0];
  let radius = Number(data.toString().split(' ')[1]);
  let lengthOfRectang = Number(data.toString().split(' ')[2]);

  if (action === 'mouse_position') {
    getMousePosition(ws, action);
    return '';
  }

  if (action === 'prnt_scrn') {
    // here will be implemented the screenshot method
    // let testClass = new ScreenClass(providerRegistry);
    // let testRegion = new Region(100, 100, 100, 100);
    // testClass.captureRegion('1', testRegion);
    // console.log(testClass);
  }

  mouseMove.mouseControl(action, radius, lengthOfRectang);
  return `${action}\n${radius}\n${lengthOfRectang ? lengthOfRectang : ''}`;
}
