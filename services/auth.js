const axios = require('axios');

const Path_User = 'http://localhost:3000/api/auth';

export const authenticateUser = async (request) => {
  try {
    const response = await axios.post(Path_User, request);
    return response.data.token;
  } catch (error) {
    return error.response.statusText;
  }
};

// authenticateUser({
//   email: 'yan@gmail.com',
//   password: 'holaKhac',
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
