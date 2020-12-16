import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAWX98jy51V5VjJSntkHRq9JO7bDNZ2ojw",
	authDomain: "vue-firebase-sites-cede3.firebaseapp.com",
	projectId: "vue-firebase-sites-cede3",
	storageBucket: "vue-firebase-sites-cede3.appspot.com",
	messagingSenderId: "193679739942",
	appId: "1:193679739942:web:c253ddf21a36a882b22ae7"
  };
//   init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }