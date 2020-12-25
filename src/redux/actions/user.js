import http from '../../helpers/http';
import qs from 'qs';

export default {
  chatlist: (token, page) => ({
    type: 'CHAT_LIST',
    payload: http(token).get('/users/chat-list' + qs.stringify({page})),
  }),
  chatRoom: (token, id, page) => ({
    type: 'CHAT_ROOM',
    payload: http(token).get('/users/chat-room/' + id + qs.stringify({page})),
  }),
  profileFriend: (token, id) => ({
    type: 'PROFILE_FRIEND',
    payload: http(token).get('/users/profile/' + id),
  }),
  profile: (token) => ({
    type: 'PROFILE',
    payload: http(token).get('/users/profile/'),
  }),
  sendChat: (data, token, id) => ({
    type: 'SEND_MESSAGE',
    payload: http(token).post('/users/send-message/' + id, qs.stringify(data)),
  }),
  refreshSend: () => ({
    type: 'REFRESH_SEND',
  }),
  readChat: (token, id) => ({
    type: 'READ_CHAT',
    payload: http(token).patch('/users/read/' + id),
  }),
  search: (token, search) => ({
    type: 'SEARCH_USER',
    payload: http(token).get(`/users/search-user?search=${search}`),
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
