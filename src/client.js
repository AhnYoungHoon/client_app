import React, { useState, useCallback, useMemo, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const ws=new WebSocket('ws://172.30.1.10:80/');
ws.onopen = () => {
	ws.send('something'); // 메세지 전송
};

// 메세지 수신
ws.onmessage = e => {
	console.log(e.data);
};

// 에러 발생시
ws.onerror = e => {
	console.log(e.message);
};

// 소켓 연결 해제
ws.onclose = e => {
	console.log(e.code, e.reason);
};