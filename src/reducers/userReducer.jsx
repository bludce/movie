const initialStateUser = {
  email: '',
}

const initialStateAuth = false

export function user(state = initialStateUser, action) {
  switch (action.type) {
      case 'USER_FETCH_DATA_SUCCESS':
        return {
          email: action.user,
        }
      case 'DEFAULT_USER':
        return {
          email: action.user,
        }
      case 'LOGOUT':
        return {
          email: '',
        }
      default:
          return state;
  }
}

export function auth(state = initialStateAuth, action) {
  switch (action.type) {
    case 'USER_AUTH':
      return action.auth
    case 'LOGOUT':
      return false
    default:
      return state;
  }
}