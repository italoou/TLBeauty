import { Comanda } from "./comanda";

export interface Cliente{
  id: number;
  nome: string;
  dataNasc: string;
  ultimaVis: string;
  comandas?: Comanda[];
}