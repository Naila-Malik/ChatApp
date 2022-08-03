import firebase from './firebaseConfig';

export const signUp = async (email, password) => {
  try {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return console.log('error', error);
  }
};
