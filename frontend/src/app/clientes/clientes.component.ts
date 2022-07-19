import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe(clientes => this.clientes = clientes)
    // this.clientes.push({nome: "italo lima", dataNasc: "09/11/1999", ultimaVis:"20/06/2022"});
    // this.clientes.push({nome: "italo lima", dataNasc: "09/11/1999", ultimaVis:"20/06/2022"});
    // this.clientes.push({nome: "italo lima", dataNasc: "09/11/1999", ultimaVis:"20/06/2022"});
    // this.clientes.push({nome: "italo lima", dataNasc: "09/11/1999", ultimaVis:"20/06/2022"});
    // this.clientes.push({nome: "italo lima", dataNasc: "09/11/1999", ultimaVis:"20/06/2022"});
  }

}
