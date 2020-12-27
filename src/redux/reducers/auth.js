const initialState = {
  token: '',
  alertMsg: '',
  isLogin: false,
  isLoading: false,
  isError: false,
  createSucces: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'failed Login',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isLogin: true,
        token: action.payload.data.token,
        alertMsg: 'Login Succesfully',
      };
    }
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        createSucces: false,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        createSucces: true,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: false,
        token: '',
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
