// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVxkLjL4Kwnw0MdXzJNxF2XhwEMuvlow4',
  authDomain: 'netflix-next-181a4.firebaseapp.com',
  projectId: 'netflix-next-181a4',
  storageBucket: 'netflix-next-181a4.appspot.com',
  messagingSenderId: '777511808773',
  appId: '1:777511808773:web:1eca09f4be7e24ee1e116c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
