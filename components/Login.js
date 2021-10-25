export default function Login({change}) {
  return (
    <>
      <form className="flex flex-col space-y-8 mt-10">
        <label className="font-bold text-lg text-white " >Email</label>
        <input type="email"  placeholder="Account number" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
        <label className="font-bold text-lg text-white">Password</label>
        <input type="password" placeholder="****" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />

        <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" >Iniciar sesión</button>

      </form>
      <p className="font-bold text-lg text-white mt-4">¿ No tienes cuenta ? </p>
      <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" onClick={() => change("Register")}>Registrate</button>
    </>
  )
}