export interface Mouse {
  mouse_up: (step: number) => void;
  mouse_down: (step: number) => void;
  mouse_left: (step: number) => void;
  mouse_right: (step: number) => void;
  mouseControl: (move: string, step: number) => void;
  drawToCircle: (radius: number) => void;
  drawToRectangle: (radius: number, length: number) => void;
  drawToSquare: (radius: number) => void;
}
