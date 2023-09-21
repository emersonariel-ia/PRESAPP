import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  logado: boolean = false;

  constructor() { }
}
