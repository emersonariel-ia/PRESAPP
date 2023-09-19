import { Time } from "@angular/common";

export interface Membro {
  id?: string;
  name?: string;
  frequenciaPorcentagem?: number;
  qtDiasComparecidos?: number;
  ministerio?: string;
  dataIngresso?: string
}

export class Culto {
  titulo?: string;
  responsavel?: string;
  data?: Date;
  tipo?: number;
  codEvento?: number;

  constructor() {

  }
}

export interface Gerente {
  nome?: string
}

export class Usuario {
  uid?: string;
  did?: string;
  nome?: string;
  sobrenome?: string;
  email!: string;
  senha!: string;

  constructor() {
  }
}

export interface UserResponse {
  result?: {
    email?: string;
    uid?: string;
    user?: any;
  };
  error?: {
    code?: string;
    message?: string;
  };
}