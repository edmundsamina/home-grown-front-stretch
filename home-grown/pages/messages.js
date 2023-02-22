import socketIO from "socket.io-client";

export default function Messages() {
  function handleClick() {
    const socket = socketIO.connect("http://localhost:3001");
    socket.on("messageResponse", console.log("hello"));
  }

  return <button onClick={handleClick}>Connect</button>;
}
