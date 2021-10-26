// import styles from '../styles/Home.module.css';
import Register from '../components/Register';
import cookie from 'js-cookie';

export default function Viewtwo() {
 
  return (
    <div className="h-screen flex flex-column">
      <div className="w-1/4 ">
        
      </div>

      <div className="w-1/2 flex-row">
        <div className="w-full h-12 bg-gray-300">
          titulo
        </div>
        <div className="w-full h-4/5 bg-gray-200">
          chats
        </div>
        <div className="w-full h-16 flex flex-column items-center justify-center bg-gray-200">
          <input className=" h-4/5 w-4/5 border px-3 rounded-lg border-gray-400 placeholder-gray-400"
            placeholder="Write your message here"
            id="inputMessage"
            name="message"
          />
          <button className="h-4/5 w-1/5 m-1 p-1 rounded-xl bg-green-500 text-white flex flex-column justify-center items-center">
            <p className="p-1">Send</p>
            <img src="https://cdn-icons-png.flaticon.com/512/309/309334.png" className="h-7 p-1"></img>
          </button>
        </div>
      </div>
      
      <div className="w-1/4"></div>
      
    </div>
  );
}
