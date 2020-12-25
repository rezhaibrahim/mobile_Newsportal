// const initialState = {
//     chatList: {},
//     chatRoom: [],
//     chatRoomPageInfo: {},
//     chatListPageInfo:{},
//     profileFriend:{},
//     profile:{},
//     resultSearch:[],
//     isLoading: false,
//     isError: false,
//     update:false,
//     alertMsg: '',
//     sendMessage: false,
//   };
  
//   export default (state = initialState, action) => {
//     switch (action.type) {
//       case 'CHAT_LIST_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//         };
//       }
//       case 'CHAT_LIST_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'CHAT_LIST_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           chatList: action.payload.data.results,
//           chatListPageInfo: action.payload.data.pageInfo,
//         };
//       }
//       case 'SEARCH_USER_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           alertMsg:'Please wait'
//         };
//       }
//       case 'SEARCH_USER_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'SEARCH_USER_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           resultSearch: action.payload.data.results,
//         };
//       }
//       case 'CLEAR': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           resultSearch: []
//         };
//       }
//       case 'CHAT_ROOM_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading get chat room',
//         };
//       }
//       case 'CHAT_ROOM_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'CHAT_ROOM_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           chatRoom: action.payload.data.results,
//           chatRoomPageInfo: action.payload.data.pageInfo,
//         };
//       }
//       case 'PROFILE_FRIEND_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading get profile friend',
//         };
//       }
//       case 'PROFILE_FRIEND_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'PROFILE_FRIEND_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           profileFriend: action.payload.data.results,
//         };
//       }
//       case 'PROFILE_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading get profile ',
//         };
//       }
//       case 'PROFILE_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'PROFILE_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           profile: action.payload.data.results,
//         };
//       }
//       case 'SEND_MESSAGE_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading send Message... please wait ',
//         };
//       }
//       case 'SEND_MESSAGE_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'SEND_MESSAGE_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           sendMessage:true,
//           alertMsg: 'SUCCESS SEND MESSAGE'
//         };
//       }
//       case 'READ_CHAT_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading get chat room',
//         };
//       }
//       case 'READ_CHAT_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'READ_CHAT_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           alertMsg: 'read chat',
//         };
//       }
//       case 'REFRESH_SEND': {
//         return {
//           ...state,
//           sendMessage: false,
//         };
//       }
//       case 'UPDATE_PROFILE_PENDING': {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           alertMsg: 'Loading get chat room',
//         };
//       }
//       case 'UPDATE_PROFILE_REJECTED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           alertMsg: action.payload.message,
//         };
//       }
//       case 'UPDATE_PROFILE_FULFILLED': {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           update:true,
//           alertMsg: 'update successfully',
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   };
  