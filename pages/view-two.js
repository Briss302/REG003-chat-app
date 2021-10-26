import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import {io} from 'socket.io-client';
import { useState } from 'react';
const socket = io("http://localhost:5000", {transports:["websocket"]});

export default function Viewtwo() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const router = useRouter();

  socket.on("send-data", (data)=>{
    setList([...list,data]);
  })

  const logOut = () => {
    cookie.remove('token');
    if (!cookie.get('token')) {
      router.push('/');
    }
  };

  const handlePost = (e) => {
    socket.emit("run-start", {post: name});
  };

  const user = cookie.get('token');

  return (
    <>
    
      <div className="h-screen flex flex-column bg-gray-900">
        <div className="w-1/4 ">
        <button onClick={() => logOut()}>Salir</button>
        </div>

        <div className="w-1/2 flex-row">
          <div className="w-full h-12 bg-gray-900 text-white">titulo</div>

          <div className="w-full h-4/5 bg-gray-900 text-white">
            {list.map((element, index) => {
              return (
                <p key={index} className="text-white">{element.post}</p>
              )              
            })}
          </div>

          <div className="w-full h-16 flex flex-column items-center justify-center bg-gray-900">
            <input
              className=" h-4/5 w-4/5 border px-3 rounded-lg border-yellow-500 placeholder-gray-400"
              placeholder="Write your message here"
              id="inputMessage"
              name="message"
              onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handlePost} className="h-4/5 w-1/5 m-1 p-1 rounded-xl border border-yellow-500 bg-gray-900 text-white flex flex-column justify-center items-center">
              <p className="p-1">Send</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561226.png"
                className="h-7 p-1"
              ></img>
            </button>
          </div>
        </div>

        <div className="w-1/4">
          
        </div>
      </div>
    </>
  );
}
