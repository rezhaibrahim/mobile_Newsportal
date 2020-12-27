const initialState = {
  allNews: [],
  allNewPageInfo: {},
  resultSearch:[],
  detailNews:{},
  myNews:[],
  listNews:[],
  listPageInfo: {},
  myNewPageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
   
  switch (action.type) {
    case 'GET_ALL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ALL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ALL_NEWS_FULFILLED': {
        // console.log("action",action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        isError: false,
        allNews: action.payload.data.result,
        allNewPageInfo: action.payload.data.pageInfo,
        resultSearch: action.payload.data.result,
      };
      
    }
    case 'GET_DETAIL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_DETAIL_NEWS_FULFILLED': {
        // console.log("action",action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailNews: action.payload.data.result,
      };
      
    }
    case 'GET_MY_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MY_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_MY_NEWS_FULFILLED': {
        // console.log("action",action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        isError: false,
        myNews: action.payload.data.result,
        myNewPageInfo: action.payload.data.pageInfo,
      };
      
    }
    case 'GET_LIST_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_LIST_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_LIST_NEWS_FULFILLED': {
        // console.log("action",action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        isError: false,
        listNews: action.payload.data.result,
        listPageInfo:action.payload.data.pageInfo,
      };
      
    }

    default: {
      return state;
    }
  }
};
