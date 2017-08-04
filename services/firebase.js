import * as Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB3M2M_fmz7mBTsab4J8eiq8jN22KS8uW4",
    authDomain: "geocontractmobile.firebaseapp.com",
    databaseURL: "https://geocontractmobile.firebaseio.com",
    projectId: "geocontractmobile",
    storageBucket: "geocontractmobile.appspot.com",
    messagingSenderId: "234080345657"
  };
  export const firebaseRef firebase.initializeApp(config);