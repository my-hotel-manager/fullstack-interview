import React from 'react';
// import { useEffect, useRef } from 'react';

export const OrdersBoard = () => {
  // Here is an example of a WebSocket connection. You may choose to rewrite
  // or refactor this method in a different file location.

  // const ws = useRef(null);

  // useEffect(() => {
  //   if (ws.current) {
  //     return;
  //   }

  //   ws.current = new WebSocket('ws://localhost:3001');

  //   ws.current.onopen = () => {
  //     ws.current.send('test message');
  //   };

  //   ws.current.onmessage = (event) => {
  //     console.log(event.data);
  //   };

  //   return () => {
  //     if (ws.current) {
  //       ws.current.close();
  //     }

  //     ws.current = null;
  //   };
  // }, []);

  return (
    <span style={{ margin: 24 }}>
      Edit this component in /src/component/orders.board.component.tsx
    </span>
  );
};
