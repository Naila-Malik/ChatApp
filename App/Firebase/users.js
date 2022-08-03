import firebase from './firebaseConfig';

export const AddUser = (name, email, uid) => {
  try {
    //  return await firebase.database().ref('/users' + uid).set({
    //     name: name,
    //     email: email,
    //     image: image
    //  })
  } catch (error) {
    console.log('Errors', error);
  }
};
