import http from '../../helpers/http';

export default {
  getAllNews: (token, search = '', page = 1) => ({
    type: 'GET_ALL_NEWS',
    payload: http(token).get(`/users/all-news?search=${search}&page=${page}`),
  }),
  getDetail: (token,id) =>({
    type: 'GET_DETAIL_NEWS',
    payload: http(token).get(`/users/detail-news/` + id)
  }),
  getMyNews:(token)=> ({
    type: 'GET_MY_NEWS',
    payload: http(token).get(`/users/my-news`)
  }),
  getListNews:(token,id)=> ({
    type: 'GET_LIST_NEWS',
    payload: http(token).get(`/users/user-news/` + id)
  })
};
