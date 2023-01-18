import { WebSocketServer } from 'ws';
import { MouseMove } from './mouseHundlers/mouseMove';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  let mouseMove = new MouseMove();

  ws.on('message', (data) => {
    console.log('received: %s', data);

    ws.send(data.toString());

    let action = data.toString().split(' ')[0];
    let radius = Number(data.toString().split(' ')[1]);
    let lengthOfRectang = Number(data.toString().split(' ')[2]);

    mouseMove.mouseControl(action, radius, lengthOfRectang);

    console.log({ action, radius, lengthOfRectang });
  });

  // ws.send(message);
});
