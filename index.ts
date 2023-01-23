import { WebSocketServer } from 'ws';
import { mouseController } from './src/controllers/mouseController';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log('received: %s', data);

    let message = mouseController(data, ws);
    if (message === '') return;
    ws.send(message);
  });
});
