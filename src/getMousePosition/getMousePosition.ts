import { mouse } from '@nut-tree/nut-js';

export function getMousePosition(ws, action: string) {
  let getMousePosition = async () => {
    let { x, y } = await mouse.getPosition();

    ws.send(`${action} ${x},${y}\n`);
  };

  getMousePosition();
}
