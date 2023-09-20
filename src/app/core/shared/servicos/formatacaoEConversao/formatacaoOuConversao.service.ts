import { Injectable } from '@angular/core';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class FormatacaoEConversaoService {

  constructor() { }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm');
  }
}
