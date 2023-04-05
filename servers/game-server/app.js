const WebSocket = require('ws');

// 存储WebSocket连接的Map
const clients = new Map();

// 创建WebSocket服务器
const wss = new WebSocket.Server({ port: 8080 });

// 监听连接请求
wss.on('connection', function connection(ws) {
  // 将新连接添加到连接池
  clients.set(ws, {});

  // 监听消息事件
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  // 监听关闭事件
  ws.on('close', function close() {
    // 从连接池中移除连接
    clients.delete(ws);
  });
});

// 向所有连接广播消息
function broadcast(message) {
  clients.forEach(function each(client, ws) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  });
}
