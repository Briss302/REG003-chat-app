// import styles from '../styles/Home.module.css';
import cookie from 'js-cookie';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

export default function Home() {
  const [form, setForm] = useState('Login');

  const user = cookie.get('token');

  console.log('soy el token', user);

  const switchForm =
    form === 'Login' ? (
      <Login change={setForm}></Login>
    ) : (
      <Register change={setForm}></Register>
    );

  return (
    <div>
      <div className="relative min-h-screen  grid bg-black ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div
            className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
            style={{ backgroundImage: 'url(images/fondo.png)' }}
          >
            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center "></div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center ">
                  <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    {switchForm}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
