import { getMousePosition } from '../getMousePosition/getMousePosition';
import { MouseMove } from '../mouseHundlers/mouseMove';
import { getScreenshot } from '../getScreenshot/getScreenshot';

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
    getScreenshot(ws, action);
    return '';
  }

  mouseMove.mouseControl(action, radius, lengthOfRectang);
  return `${action}\n${radius}\n${lengthOfRectang ? lengthOfRectang : ''}`;
}
