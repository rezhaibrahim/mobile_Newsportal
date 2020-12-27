import http from '../../helpers/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('/login', qs.stringify(data)),
  }),
  register: (data) => ({
    type: 'REGISTER',
    payload: http().post('/register', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};
