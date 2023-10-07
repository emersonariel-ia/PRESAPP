import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { MatTableDataSource } from '@angular/material/table';
import { Storage } from '@ionic/storage-angular';


export interface UserData {
  id: string;
  name: string;
}
@Component({
  selector: 'app-relatorios',
  templateUrl: 'relatorios.page.html',
  styleUrls: ['relatorios.page.scss']
})
export class RelatoriosPage {


  @Output() titulo: string = 'Relatórios';

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  usuarioLogado: boolean = false;

  constructor(private storage: Storage) {
    //this.dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  }

  numeroCultosMes?: number;



  async ngOnInit() {
    this.usuarioLogado = await this.storage.get('usuarioLogado');
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

const ELEMENT_DATA: UserData[] = [
  { id: '1', name: 'Émerson Ariel Schmitt' },
  { id: '1', name: 'Émerson Ariel Schmitt' },
  { id: '1', name: 'Émerson Ariel Schmitt' },
  // Adicione mais dados conforme necessário
];