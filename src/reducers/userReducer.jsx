const initialState = {
  email: '',
  auth: false
}

export function user(state = initialState, action) {
  switch (action.type) {
      case 'USER_FETCH_DATA_SUCCESS':
          return {
            email: action.user,
            auth: action.auth,
          }

      default:
          return state;
  }
}