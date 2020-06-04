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
      case 'DEFAULT_USER':
        return {
          email: action.user,
          auth: action.auth,
        }
      case 'LOGOUT':
        return {
          email: '',
          auth: false,
        }

      default:
          return state;
  }
}