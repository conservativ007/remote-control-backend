import { WebSocketServer } from 'ws';
import { MouseMove } from './mouseHundlers/mouseMove';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  let mouseMove = new MouseMove();

  ws.on('message', (data) => {
    console.log('received: %s', data);

    ws.send(data.toString());

    let step = Number(data.toString().split(' ')[1]);
    let move = data.toString();

    mouseMove.mouseControl(move, step);
  });

  // ws.send(message);
});
