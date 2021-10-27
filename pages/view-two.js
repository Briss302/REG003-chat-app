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
    
      <div className="h-screen p-4 flex flex-column bg-gray-900">
        <div className="w-1/4 m-2">
          <div className="text-white pl-2 border-b-2 border-purple-400 h-12 flex items-end text-3xl">
            Felipita Feliz
          </div>
          <div className="h-4/5 p-2">

          </div>
          <div className="h-16 flex items-center">
            <button className="h-3/5 ml-1/4 p-1 rounded-xl border border-yellow-500 bg-gray-900 text-white flex flex-column justify-center items-center" onClick={() => logOut()}>Log Out</button>
          </div>
          
        </div>

        <div className="w-1/4 m-2 flex flex-col">
          <p className="text-gray-400 h-12 pl-2 border-b-2 border-purple-400 flex items-end text-xl" >Chat Room</p>
          <div className="h-4/5 p-2 text-gray-200 flex">
            <img 
            src="https://cdn-icons.flaticon.com/png/512/5342/premium/5342780.png?token=exp=1635293978~hmac=86a545762c91653c0e910825d0cbe36b"
            className="h-6 pr-2"
            />
            <p >Laboratoria Reg003</p>
          </div>
          
          
        </div>

        <div className="w-1/2 m-2 flex flex-col">
          
          <p className="w-full h-12 pl-2 text-xl text-gray-300 bg-gray-900 border-b-2 border-purple-400 flex items-end">Laboratoria Reg003</p>

          <div className="w-full h-4/5 p-2 bg-gray-900 text-white">
            {list.map((element, index) => {
              return (
                <p key={index} className="text-white">{element.post}</p>
              )              
            })}
          </div>


          <div className="w-full h-16 flex flex-column items-center justify-center bg-gray-900">
            <input
              className=" h-3/5 w-4/5 border px-3 rounded-lg border-yellow-500 placeholder-gray-400"
              placeholder="Write your message here"
              id="inputMessage"
              name="message"
              onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handlePost} className="h-3/5 m-1 p-1 rounded-xl border border-yellow-500 bg-gray-900 text-white flex flex-column justify-center items-center">
              <p className="p-1">Send</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561226.png"
                className="h-7 p-1"
              />
            </button>
          </div>
        </div>

        
      </div>
    </>
  );
}
