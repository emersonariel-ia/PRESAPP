import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { Services } from '../../shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { IonDatetime } from '@ionic/angular';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';
import { format } from 'date-fns';
import { FormatacaoEConversaoService } from '../../shared/servicos/formatacaoEConversao/formatacaoOuConversao.service';
import { UserService } from '../../shared/userDados/user.service';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent implements OnInit {

  constructor(private service: Services, private serviceMensagem: MensagemToastService, private formatacaoOuConvercao: FormatacaoEConversaoService, private userService: UserService) { }

  titulo?: string;
  responsavel?: string;
  foto?: string;
  data?: Date;
  numeroPresentes?: number;
  presentes: MembroComponent[] = [];

  selectedDateTime?: string; // Campo para armazenar a data selecionada
  @ViewChild('datePicker') datePicker?: IonDatetime;

  culto?: Culto;

  @Output() tituloCabecalho = "Registro de Culto";

  usuarioLogado: boolean = this.userService.logado;

  async ngOnInit() {
    // Inscreva-se no evento carregado$
    this.userService.carregado$.subscribe((carregado) => {
      if (carregado) {
        // O serviço está pronto, agora você pode usá-lo
        this.usuarioLogado = this.userService.logado;
      }
    });
  }

  onSubmit() {
    // Valida se todos os campos estão preenchidos
    if (this.titulo != '' && this.data != undefined && this.responsavel != '') {
      this.culto = {
        titulo: this.titulo,
        data: this.data,
        responsavel: this.responsavel,
        tipo: 1,
      };

      this.service.criarCulto(this.culto);
    }
    else {
      this.serviceMensagem.mensagemErro("Todos os campos precisam estar preenchidos!", 'bottom', 4000);
    }
  }

  dateChanged(event: any) {
    // O valor selecionado estará em event.detail.value
    this.selectedDateTime = event.detail.value;
    console.log('Data selecionada:', this.selectedDateTime);
  }
}