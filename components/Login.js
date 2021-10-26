import { useForm } from 'react-hook-form';
import { authenticateUser } from '../services/auth';
import cookie from 'js-cookie';
import Link from 'next/link';

export default function Login({ change }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const LoginUser = await authenticateUser(data);
      cookie.set('token', LoginUser, { expires: 1 / 24 });
      console.log(LoginUser);
      // if (submitNewUser !== 'Ok') {
      //   return alert(submitNewUser);
      // }
      // // limpiar campos
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col space-y-8 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold text-lg text-white " htmlFor="inputEmail">
          Email
        </label>
        <input
          type="email"
          placeholder="Account number"
          className="border rounded-lg py-3 px-3 mt-4 bg-black border-yellow-500 placeholder-white-500 text-white"
          id="inputEmail"
          name="email"
          {...register('email', {
            required: {
              value: true,
              message: 'email es requerido',
            },
          })}
        />
        <span style={{ color: 'red', fontSize: '12px' }}>
          {errors.email && errors.email.message}
        </span>
        <label className="font-bold text-lg text-white" htmlFor="inputPassword">
          Password
        </label>
        <input
          type="password"
          placeholder="****"
          className="border rounded-lg py-3 px-3 bg-black border-yellow-500 placeholder-white-500 text-white"
          id="inputPassword"
          name="password"
          {...register('password', {
            required: {
              value: true,
              message: 'password es requerido',
            },
          })}
        />

        <span style={{ color: 'red', fontSize: '12px' }}>
          {errors.password && errors.password.message}
        </span>

        <Link href="/view-two">
          <button className="border border-yellow-500 bg-black text-white rounded-lg py-3 font-semibold">
            Iniciar sesión
          </button>
        </Link>
      </form>
      <p className="font-bold text-sm text-center text-white mt-4">
        ¿ No tienes cuenta ?{' '}
        <span
          onClick={() => change('Register')}
          className="text-yellow-500 cursor-pointer"
        >
          Registrate
        </span>
      </p>
    </>
  );
}
