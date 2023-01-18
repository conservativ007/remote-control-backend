import { mouse, left, up, right, down } from '@nut-tree/nut-js';
import { Mouse } from '../types/types';

export class MouseMove implements Mouse {
  mouseControl(move: string, step: number) {
    if (move.toString().startsWith('mouse_up')) this.mouse_up(step);
    if (move.toString().startsWith('mouse_down')) this.mouse_down(step);
    if (move.toString().startsWith('mouse_left')) this.mouse_left(step);
    if (move.toString().startsWith('mouse_right')) this.mouse_right(step);
  }

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
}
