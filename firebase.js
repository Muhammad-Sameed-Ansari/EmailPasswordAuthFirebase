import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkMUoMLGkHk9kdh8TmHXigJOjUwhP2rXo",
  authDomain: "emailpasswordauth-4faee.firebaseapp.com",
  projectId: "emailpasswordauth-4faee",
  storageBucket: "emailpasswordauth-4faee.appspot.com",
  messagingSenderId: "840556360014",
  appId: "1:840556360014:web:f9690126694d1f778a6e1f"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }