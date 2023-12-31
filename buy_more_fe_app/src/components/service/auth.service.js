import axios from 'axios';

// const API_URL = "/auth";
// const API_URL = "/auth";

const signup = (
  email,
  firstName,
  lastName,
  password,
  confirmpassword,
  phoneNum
) => {
  return axios
    .post('http://localhost:3001/signup', {
      email,
      firstName,
      lastName,
      password,
      confirmpassword,
      phoneNum,
    })
    .then((response) => {
      window.location = '/login';
    });
};

const login = (email, password) => {
  return axios
    .post('http://localhost:3001/login', { email, password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      } else {
        alert('Wrong Username or Password wrong');
      }
    })
    .catch((err) => alert('Username or Password wrong'));
};

const logout = () => {
  localStorage.removeItem('user');

  window.location = '/login';
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
