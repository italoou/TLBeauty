import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent implements OnInit {

  constructor(private router: Router,private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addCliente(nome: string, dataNasc: string){
    nome = nome.trim();
    dataNasc = dataNasc.trim();

    if(!nome || !dataNasc){
      return;
    }

    const ultimaVis = "00/00/0000";
    
    this.clientesService.addCliente({nome, dataNasc, ultimaVis} as Cliente)
      .subscribe(response => this.router.navigate(['/clientes'])
    );

  }

}
