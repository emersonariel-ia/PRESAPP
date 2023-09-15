// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { Usuario } from "src/app/models/models";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB6ecbkcaVRHjx5PcXHIQf_UqvEim423s8",
    authDomain: "church-manager-6ed4a.firebaseapp.com",
    databaseURL: "https://church-manager-6ed4a-default-rtdb.firebaseio.com",
    projectId: "church-manager-6ed4a",
    storageBucket: "church-manager-6ed4a.appspot.com",
    messagingSenderId: "335382472662",
    appId: "1:335382472662:web:408dfbe48642cd9ad0e677",
    measurementId: "G-7LYWJBWYVL"
  }
};

initializeApp(environment.firebase);
export const db = getDatabase();

export function alterarUsuario(data: Usuario) {
  const { v4: uuidv4 } = require('uuid');
  set(ref(db, 'users/' + uuidv4()), {
    username: data.nome,
    email: data.email
  }).then(d => {
    console.log('>>>>>>>>>>>', d)
  });
}

// export function buscaUsuario(){

//   ref(db, 'users/1').once('value')
//   .then((snapshot) => {
//     const userData = snapshot.val();
//     console.log(userData);
//   })
//   .catch((error) => {
//     console.error('Erro ao ler dados:', error);
//   });
// }

