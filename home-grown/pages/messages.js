import {useEffect} from 'react'
import socketIO from "socket.io-client";

export default function Messages() {

  useEffect(()=>{
    function  connection() {
      const socket = socketIO.connect("http://localhost:3001", {
        withCredentials: true
       })
      socket.on("messageResponse", ()=>{console.log("hello")});
    } connection()
  
  }, [])


  async function handleClick(){
    const response = await fetch('http://localhost:3000/api/homegrown/public/messages/tPcGjFOvZQQLjHGDOJ1Zea1vho92')
    const data = await response.json()
    console.log(data.payload)

  }

  return <button onClick={handleClick}>Connect</button>;
}
  