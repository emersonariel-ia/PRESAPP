import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue, set, get } from 'firebase/database';
import { Observable } from 'rxjs';
import { Culto, Usuario, UserResponse, Membro } from 'src/app/models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(private afDatabase: AngularFireDatabase) { }

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

  criarMembro(data: Membro): number {
    const { v4: uuidv4 } = require('uuid');
    const ob = set(ref(this.db, 'membros/' + uuidv4()), {
      name: data.name,
      frequenciaPorcentagem: 0,
      qtDiasComparecidos: 0,
      ministerio: data.ministerio,
      dataIngresso: new Date()
    }).then(d => {
      console.log('d', d)
      return 1;
    }).catch(err => {
      console.log('err', err)
      return 0;
    });

    console.log('ob', ob)
    return 1;
  }

  // Deixei generico como Eventos porque futuramente podemos usar para mais
  addMembrosAoEvento(data: Membro, pUuid: string, codEvento: string) {
    console.log('eventos/' + codEvento + '/presenca/' + pUuid)
    const ob = set(ref(this.db, 'eventos/' + codEvento + '/presenca/' + pUuid), {
      nome: data.name,
      presencaConfirmada: false
    }).then(d => {
      console.log(d)
    });
  }

  // Função para criar dados generica
  alteraDataBase() {

  }

  listaDeDados = [];
  // Função para criar dados generica
  consultaDataBase(pCaminho: string) {
    var objDados = this.afDatabase.object(pCaminho);
    objDados.valueChanges().subscribe((data: any) => {
      this.listaDeDados = [];
      Object.entries(data)
        .map(dado => {
          console.log('consultaDataBase:', Object.assign(dado));

          //this.listaDeDados.push(Object.assign(d));//, { codMembro: d[0] }));
        })
    });;
  }
}