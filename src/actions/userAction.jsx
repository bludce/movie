import { app } from '../firebase';

export const authWithEmailPassword = (email, password) => {
  return (dispatch) => {
    app.auth().fetchSignInMethodsForEmail(email)
    .then((providers) => {
      if (providers.length === 0) {
        // Если нет аккаунта, то создаем нового пользователя
        return app.auth().createUserWithEmailAndPassword(email, password)
      } else if (providers.indexOf("password") === -1) {
        console.log('Please, try alternative login.');
      } else {
        return app.auth().signInWithEmailAndPassword(email, password)
      }
    })
    .then((user) => {
      dispatch(UserFetchDataSuccess(user))
    })
    .catch((error) => {
      console.log(error.message);
    })
  };
}

export const UserFetchDataSuccess = (user) => {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user: user.user.email,
    auth: true
  };
}

export const logout = () => {
  return (dispatch) => {
    app.auth().signOut().then(() => {
      dispatch(Userlogout())
    });
  };
}

export const Userlogout = () => {
  return {
    type: 'LOGOUT',
  };
}