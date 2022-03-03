import firebase from "firebase/app";
import 'firebase/auth'

const app = firebase.initializeApp({
   apiKey: "AIzaSyCLrpwJBT3rn-PPV0iQQCVrsegm2SHdTQk",
  authDomain: "fir-getx-app-d17e0.firebaseapp.com",
  projectId: "fir-getx-app-d17e0",
  storageBucket: "fir-getx-app-d17e0.appspot.com",
  messagingSenderId: "6478067680",
  appId: "1:6478067680:web:d7d598ff5e1e4390a81d85"
})

export const auth = app.auth()
export default app