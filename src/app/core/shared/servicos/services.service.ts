import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import { Culto, Usuario, Membro } from 'src/app/models/models';
import { environment } from 'src/environments/environment';
import { MensagemToastService } from './mensagemToast/mensagem-toast.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class Services {
  constructor(private afDatabase: AngularFireDatabase, private serviceMensagem: MensagemToastService, private afAuth: AngularFireAuth) { }
  public toastButtons = [
    {
      text: 'fechar',
      role: 'cancel',
    },
  ];

  criarCulto(data: Culto) {
    const { v4: uuidv4 } = require('uuid');
    this.afDatabase.database.ref('eventos/' + uuidv4()).set({
      titulo: data.titulo,
      responsavel: data.responsavel,
      data: data.data,
      tipo: 1
    }).then(d => {
      this.serviceMensagem.mensagemDeSucesso('Culto Criado!', 'bottom', 1000, '/tabs/prog-cultos');
    }).catch((error) => {
      console.log(error);
      this.serviceMensagem.mensagemErro('Não foi possível registrar culto! Tente novamente.');
    })
  }

  criaGerente(data: Usuario) {
    this.afAuth.createUserWithEmailAndPassword(data.email, data.senha)
      .then((resultado) => {
        console.log('result ', resultado);
        this.serviceMensagem.mensagemDeSucesso('Gerente Criado!', 'bottom', 1000);
      })
      .catch((error) => {
        console.log(error);
        this.serviceMensagem.mensagemErro('Algo deu errado, Revise e tente novamente');
      });
  }

  entrarGerente(us: Usuario): number {
    this.afAuth.signInWithEmailAndPassword(us.email, us.senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential.user)
        return 1;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return 0;
      });

    return 1;
  }

  criarMembro(data: Membro) {
    const { v4: uuidv4 } = require('uuid');
    this.afDatabase.database.ref('membros/' + uuidv4()).set({
      name: data.name,
      frequenciaPorcentagem: 0,
      qtDiasComparecidos: 0,
      ministerio: data.ministerio,
      dataIngresso: new Date()
    }).then(d => {
      this.serviceMensagem.mensagemDeSucesso('Membro cadastrado com sucesso!', 'bottom', 1000);
    }).catch(err => {
      this.serviceMensagem.mensagemErro('Algo deu errado, revise e tente novamente.');
    });
  }

  // Deixei generico como Eventos porque futuramente podemos usar para mais
  addMembrosAoEvento(data: Membro, pUuid: string, codEvento: string) {
    this.afDatabase.database.ref('eventos/' + codEvento + '/presenca/').push({
      nome: data.name,
      presencaConfirmada: false
    });
  }
}