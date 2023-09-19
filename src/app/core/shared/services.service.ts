import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue, set, get } from 'firebase/database';
import { Observable } from 'rxjs';
import { Culto, Usuario, UserResponse } from 'src/app/models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor() { }

  app = initializeApp(environment.firebase);
  db = getDatabase();
  auth = getAuth(this.app);
  ref = ref(this.db, 'cultos/');

  // recuperaCultos(): promise<Culto> {
  //   onValue(this.ref, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //     const vls = Object.values(snapshot.val());
  //     return vls;
  //   });
  // }
  cultos!: Culto[];
  async get(): Promise<Array<Culto>> {
    const snapshot = await get(this.ref);
    snapshot.forEach((linha) => {
      console.log('linha', linha);
      this.cultos.push({
        titulo: linha.val().titulo
      });
      console.log(linha.val().titulo);
    })
    return this.cultos;
  }

  criarCulto(data: Culto) {
    const { v4: uuidv4 } = require('uuid');
    const ob = set(ref(this.db, 'eventos/' + uuidv4()), {
      titulo: data.titulo,
      responsavel: data.responsavel,
      data: data.data,
      tipo: 1
    }).then(d => {
      console.log(ob)
    });
  }

  criaGerente(data: Usuario) {
    createUserWithEmailAndPassword(this.auth, data.email, data.senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('login do usuario', userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  entrarGerente(us: Usuario) {
    signInWithEmailAndPassword(this.auth, us.email, us.senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential.user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}