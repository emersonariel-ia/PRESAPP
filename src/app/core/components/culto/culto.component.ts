import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { Services } from '../../shared/servicos/services.service';
import { Culto } from 'src/app/models/models';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent implements OnInit {

  constructor(private service: Services) { }

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

    //console.log('data', this.data)
    this.culto = {
      titulo: this.titulo,
      data: this.data,
      responsavel: this.responsavel,
      tipo: 1,
    };
    //this.selectedDateTime =  
    //criarCulto(this.culto);

    this.service.criarCulto(this.culto);
    // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)

  }

  dateChanged(event: any) {
    // O valor selecionado estará em event.detail.value
    this.selectedDateTime = event.detail.value;
    console.log('Data selecionada:', this.selectedDateTime);
  }
}