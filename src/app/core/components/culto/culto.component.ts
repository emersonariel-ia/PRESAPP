import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MembroComponent } from '../membro/membro.component';
import { criarCulto } from 'src/environments/environment';
import { Culto } from 'src/app/models/models';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.scss'],
})
export class CultoComponent implements OnInit {

  constructor() { }

  titulo?: string;
  descricao?: string;
  foto?: string;
  data?: Date;
  hora?: string;
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
      descricao: this.descricao,
      data: this.data,
      hora: this.hora
    };
    //this.selectedDateTime =  
    //console.log(this.datePicker.value)
    //criarCulto(this.culto);

    // Faça algo com os valores do formulário (por exemplo, enviar para um serviço de registro)

  }

  dateChanged(event: any) {
    // O valor selecionado estará em event.detail.value
    this.selectedDateTime = event.detail.value;
    console.log('Data selecionada:', this.selectedDateTime);
  }
}