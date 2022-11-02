import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBl7RwE_OIOwF8JUm3vZh5y394H7-qltfQ',
  authDomain: 'netflix-clone-cfff9.firebaseapp.com',
  projectId: 'netflix-clone-cfff9',
  storageBucket: 'netflix-clone-cfff9.appspot.com',
  messagingSenderId: '479697554386',
  appId: '1:479697554386:web:51dc29bb9fd1fbe887d60b'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db