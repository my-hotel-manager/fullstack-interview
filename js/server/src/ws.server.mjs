import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (conn) => {
  console.log('connection established');

  conn.on('message', (message) => {
    console.log(`message recieved: ${message}`);
    conn.send(`message recieved: ${message}`);
  });
});
