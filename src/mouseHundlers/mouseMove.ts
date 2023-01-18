import {
  mouse,
  left,
  up,
  right,
  down,
  Point,
  straightTo,
} from '@nut-tree/nut-js';
import { Mouse } from '../types/types';

export class MouseMove implements Mouse {
  mouseControl(move: string, step: number, length?: number) {
    if (move.startsWith('mouse_up')) this.mouse_up(step);
    if (move.startsWith('mouse_down')) this.mouse_down(step);
    if (move.startsWith('mouse_left')) this.mouse_left(step);
    if (move.startsWith('mouse_right')) this.mouse_right(step);
    if (move.startsWith('draw_circle')) this.drawToCircle(step);
    if (move.startsWith('draw_rectangle')) this.drawToRectangle(step, length);
    if (move.startsWith('draw_square')) this.drawToSquare(step);
  }

  // move

  mouse_up(step: number): void {
    mouse.move(up(step));
  }
  mouse_down(step: number): void {
    mouse.move(down(step));
  }
  mouse_left(step: number): void {
    mouse.move(left(step));
  }
  mouse_right(step: number): void {
    mouse.move(right(step));
  }

  // -------------------------------
  // draw a circle

  async drawToCircle(radius: number) {
    const mousePos = await mouse.getPosition();

    for (let i = 0; i <= Math.PI * 2 + 0.1; i += 0.01) {
      const x = mousePos.x + radius * Math.cos(i) - radius;
      const y = mousePos.y + radius * Math.sin(i);

      mouse.config.mouseSpeed = 1000;
      const fast = new Point(x, y);
      await mouse.move(straightTo(fast));
    }
  }

  // draw a rectage

  async drawToRectangle(radius: number, length: number) {
    let left = radius;
    let top = length;

    let result = (left + top) * 2;

    mouse.config.mouseSpeed = 1000;
    const mousePos = await mouse.getPosition();

    for (let i = 1; i <= result; i += 1) {
      if (i <= left) {
        const fast = new Point(mousePos.x - 0, (mousePos.y -= 1));
        await mouse.move(straightTo(fast));
      } else if (i >= left && i <= left + top) {
        const fast = new Point((mousePos.x += 1), mousePos.y - 0);
        await mouse.move(straightTo(fast));
      } else if (i >= left + top && i <= left * 2 + top) {
        const fast = new Point(mousePos.x - 0, (mousePos.y += 1));
        await mouse.move(straightTo(fast));
      } else if (i >= left * 2 + top && i <= (left + top) * 2) {
        const fast = new Point((mousePos.x -= 1), mousePos.y - 0);
        await mouse.move(straightTo(fast));
      }
    }
  }

  // draw a square

  async drawToSquare(radius: number) {
    radius = radius * 4;
    const chunkOfRadius = radius / 4;

    mouse.config.mouseSpeed = 1000;
    const mousePos = await mouse.getPosition();

    for (let i = 1; i <= radius; i++) {
      if (i <= chunkOfRadius) {
        const fast = new Point(mousePos.x - 0, (mousePos.y -= 1));
        await mouse.move(straightTo(fast));
      } else if (i >= chunkOfRadius && i <= chunkOfRadius * 2) {
        const fast = new Point((mousePos.x -= 1), mousePos.y - 0);
        await mouse.move(straightTo(fast));
      } else if (i >= chunkOfRadius * 2 && i <= chunkOfRadius * 3) {
        const fast = new Point(mousePos.x - 0, (mousePos.y += 1));
        await mouse.move(straightTo(fast));
      } else if (i >= chunkOfRadius * 3) {
        const fast = new Point((mousePos.x += 1), mousePos.y - 0);
        await mouse.move(straightTo(fast));
      }
    }
  }
}
