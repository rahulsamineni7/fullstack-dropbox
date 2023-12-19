import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDtz6y_Ui5zJBhI8-kpnEpIOmtmpgKML6k",
    authDomain: "dropbox-clone-c6b33.firebaseapp.com",
    projectId: "dropbox-clone-c6b33",
    storageBucket: "dropbox-clone-c6b33.appspot.com",
    messagingSenderId: "609675346963",
    appId: "1:609675346963:web:c6234dc083829e02a6abe6"
  };
  

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
