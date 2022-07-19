import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {

  cliente: Cliente = {id: 0, nome: "", dataNasc: "", ultimaVis: "", comandas: []};
  constructor(private clienteService: ClientesService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(id).subscribe(client => this.cliente = client);
  }

}
