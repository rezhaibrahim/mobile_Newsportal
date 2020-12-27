import http from '../../helpers/http';
import qs from 'qs';

export default {
  listUser:(token,search)=> ({
    type: 'LIST_USER',
    payload: http(token).get(`/users/search-user?search=${search}`)
  }),
  myProfile:(token)=> ({
    type: 'MY_PROFILE',
    payload: http(token).get(`/users/profile`)
  }),
 
  clear:(token) => ({
    type: 'CLEAR',
  }),
  updateProfil: (token,data) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('/users/edit-profile', qs.stringify(data)),
  }),
  updatePicture: (token,data) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('/users/edit-profile', data),
  })
};
