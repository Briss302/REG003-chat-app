import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../services/user';

const Register = () => {
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
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="text-sm font-bold text-gray-600 block"
              htmlFor="inputName"
            >
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.name && errors.name.message}
            </span>
          </div>
          <div>
            <label
              className="text-sm font-bold text-gray-600 block"
              htmlFor="inputEmail"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.email && errors.email.message}
            </span>
          </div>
          <div>
            <label
              className="text-sm font-bold text-gray-600 block"
              htmlFor="inputPassword"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.password && errors.password.message}
            </span>
          </div>
          <input
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-ad text-white text-sm"
            type="submit"
            value="Registrarse"
          />
        </form>
      </div>
    </>
  );
};

export default Register;
