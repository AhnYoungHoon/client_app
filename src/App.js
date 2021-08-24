import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

function App() {
  const ws=new WebSocket('ws://172.30.1.22:3000/');
  
  let imp;

  let [state, setstate] = useState({
    count: ''
  });

    ws.onopen = () => {
      ws.send('something'); // 메세지 전송
      console.log('yes');
    };

    // 메세지 수신
    ws.onmessage = e => {
      console.log(e.data);
      imp=String(e.data);
      setstate
      console.log(imp);
      console.log(state);
    };


    // 에러 발생시
    ws.onerror = e => {
      console.log(e.message);
    };

    // 소켓 연결 해제
    ws.onclose = e => {
      console.log(e.code, e.reason);
    };
    
    // useEffect(() => {
    //   document.getElementById("count") = `You clicked ${count} times`;
    // }, [count]); // count가 바뀔 때만 effect를 재실행합니다.
//
    



  return (
    <div className="App">
      <h2>ㅇㅇㅇ</h2>
      <h4>{state}</h4>
    </div>
  );
}

export default App;
