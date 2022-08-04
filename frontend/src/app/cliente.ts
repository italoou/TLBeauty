import { Comanda } from "./comanda";

export interface Cliente{
  id: number;
  nome: string;
  dataNasc: string;
  telefone?: string;
  endereco?: string;
  profissao?: string;
  ultimaVis: string;
  comandas?: Comanda[];
}