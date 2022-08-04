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

  async addCliente(nome: string, dataNasc: string, telefone: string, profissao?: string, endereco?: string){
    nome = nome.trim();
    dataNasc = dataNasc.trim();
    telefone = telefone.trim();

    if(!nome || !dataNasc || !telefone){
      return;
    }

    const ultimaVis = "00/00/0000";
    
    await this.clientesService.addCliente({nome, dataNasc, telefone, endereco, profissao, ultimaVis} as Cliente)
      .subscribe(response => this.router.navigate([`/clientes/${response.id}`])
    );

  }

}
