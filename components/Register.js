import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../services/user';

const Register = ({change}) => {
  // const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const submitNewUser = await createUser(data);
      if (submitNewUser !== 'Ok') {
        return alert(submitNewUser);
      }
      // limpiar campos
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <form className="flex flex-col space-y-8 mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="font-bold text-lg text-white"
              htmlFor="inputName"
            >
              Name
            </label>
            <input
              className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
              id="inputName"
              name="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'nombre es requerido',
                },
                maxLength: {
                  value: 20,
                  message: 'No más de 20 carácteres!',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'No es nombre válido',
                },
              })}
          />
          <br />
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.name && errors.name.message}
            </span>
          </div>
          <div>
            <label
              className="font-bold text-lg text-white"
              htmlFor="inputEmail"
            >
              Email
            </label> <br />
            <input
              className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
              id="inputEmail"
              name="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'email es requerido',
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'No es un email válido',
                },
              })}
          />
          <br />
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.email && errors.email.message}
            </span>
          </div>
          <div>
            <label
              className="font-bold text-lg text-white"
              htmlFor="inputPassword"
            >
              Password
            </label>
            <input
              className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
              id="inputPassword"
              name="password"
              type="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'password es requerido',
                },
                minLength: {
                  value: 7,
                  message: 'password débil',
                },
              })}
          />
          <br />
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.password && errors.password.message}
            </span>
          </div>
          <input
            className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
            type="submit"
            value="Registrarse"
          />
      </form>
      <p className="font-bold text-lg text-white mt-4">¿ Ya tienes cuenta ? </p>
      <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" onClick={() => change("Login")}>Ingresar</button>
    </>
  );
};

export default Register;
