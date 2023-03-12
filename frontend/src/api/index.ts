let socket = new WebSocket('ws://localhost:8080/ws');

let connect = () => {
  console.log('Attempting Connection...');

  socket.onopen = () => {
    console.log("Successfully Connected");
  }
}

let sendMsg = () => {}

export {connect, sendMsg}