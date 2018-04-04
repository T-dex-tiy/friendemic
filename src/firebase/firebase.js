import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBUpkY0faIbyZhNTdmJOz9HvjTiypubJfI",
     authDomain: "friendemic-b8feb.firebaseapp.com",
     databaseURL: "https://friendemic-b8feb.firebaseio.com",
     storageBucket: "friendemic-b8feb.appspot.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
