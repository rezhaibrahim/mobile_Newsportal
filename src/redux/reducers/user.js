const initialState = {
    listUser: [],
    myProfile:{},
    isLoading: false,
    isError: false,
    alertMsg: '',
}

export default (state = initialState, action) => {
   
    switch (action.type) {
      case 'LIST_USER_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'LIST_USER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload.response.data.message,
        };
      }
      case 'LIST_USER_FULFILLED': {
        
        return {
          ...state,
          isLoading: false,
          isError: false,
          listUser: action.payload.data.result,
          
        };
        
      }
      case 'MY_PROFILE_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'MY_PROFILE_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload.response.data.message,
        };
      }
      case 'MY_PROFILE_FULFILLED': {
        
        return {
          ...state,
          isLoading: false,
          isError: false,
          myProfile: action.payload.data.result,
          
        };
        
      }
  
      default: {
        return state;
      }
    }
  };