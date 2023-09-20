import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Services } from '../../shared/servicos/services.service';
import { Membro } from 'src/app/models/models';
import { ToastController } from '@ionic/angular';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';

interface Ministerios {
  codigo?: string;
  nome?: string;
}
@Component({
  selector: 'app-cadastro-membro',
  templateUrl: './cadastro-membro.component.html',
  styleUrls: ['./cadastro-membro.component.scss'],
})
export class CadastroMembroComponent implements OnInit {

  customActionSheetOptions = {
    header: 'Ministérios',
    subHeader: 'Selecione os ministérios que você faz parte',
  };

  constructor(private afDatabase: AngularFireDatabase, private service: Services, private serviceMensagem: MensagemToastService) { }

  nome?: string;
  frequenciaPorcentagem?: number;
  qtDiasComparecidos?: number;
  ministerioSelecionados?: string[];
  dataIngresso?: Number;
  listaMinisterios?: any;
  ministerios?: any;
  cadastroMembro?: Membro;

  ngOnInit() {
    this.ministerios = this.afDatabase.object('/ministerios');

    // Leia os dados do objeto
    this.ministerios.valueChanges().subscribe((data: Ministerios) => {
      this.listaMinisterios = [];
      Object.entries(data).map(d => {
        this.listaMinisterios.push(d[1]);
      })
      console.log('Dados do objeto:', this.listaMinisterios);
    });
  }

  async onSubmit() {
    // Monta obj para gravar no banco de dados
    this.cadastroMembro = {
      name: this.nome,
      ministerio: this.ministerioSelecionados
    }

    const retorno = this.service.criarMembro(this.cadastroMembro);
    console.log('ret', retorno);
    if (retorno == 1) {
      this.nome = '';
      this.ministerioSelecionados = [];

      this.serviceMensagem.mensagemDeSucesso('Membro cadastrado com sucesso.');
    }

  }
}