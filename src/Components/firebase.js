import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBk2diKZzLEue8HLk8VrOFS2Bd-YBdcR4c",
  authDomain: "ems-project-e5c7f.firebaseapp.com",
  projectId: "ems-project-e5c7f",
  storageBucket: "ems-project-e5c7f.appspot.com",
  messagingSenderId: "153746236852",
  appId: "1:153746236852:web:37f8d4624301c2dee57ee1"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;