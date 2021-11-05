import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtoService.addProduto(this.produto);
    this.produto = new Produto();
  }

}
