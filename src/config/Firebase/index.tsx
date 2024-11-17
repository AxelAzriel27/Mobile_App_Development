// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2SC6_kYUKkxIzPLSWOEmKkYQrHSuCm6w',
  authDomain: 'moneytracker-axel.firebaseapp.com',
  projectId: 'moneytracker-axel',
  storageBucket: 'moneytracker-axel.firebasestorage.app',
  messagingSenderId: '282195899130',
  appId: '1:282195899130:web:44f3e06ebd120747444f43',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
