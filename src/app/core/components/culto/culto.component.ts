import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { Services } from '../../shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { IonDatetime } from '@ionic/angular';
import { MensagemToastService } from '../../shared/servicos/mensagemToast/mensagem-toast.service';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent implements OnInit {

  constructor(private service: Services, private serviceMensagem: MensagemToastService) { }

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

  ngOnInit() { }

  onSubmit() {

    this.culto = {
      titulo: this.titulo,
      data: this.data,
      responsavel: this.responsavel,
      tipo: 1,
    };
    let resp = 0;
    resp = this.service.criarCulto(this.culto);
    if (resp == 1) {
      this.serviceMensagem.mensagemDeSucesso('Culto Agendado!');
    } else {
      this.serviceMensagem.mensagemDeErroSenhaForaPadrao("Algo deu errado!");
    }    
  }

  dateChanged(event: any) {
    // O valor selecionado estará em event.detail.value
    this.selectedDateTime = event.detail.value;
    console.log('Data selecionada:', this.selectedDateTime);
  }
}