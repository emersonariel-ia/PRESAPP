import { Injectable } from '@angular/core';
import { Gerente } from 'src/app/models/models';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class CadastroGerenteService {

//   constructor(private firestore : AngularFireStore) { }

  

//   create(gerente:Gerente) {
//     const result = await 
//   }
// }

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://church-manager-6ed4a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(userId: string, name: any, email: any) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email
  });
}