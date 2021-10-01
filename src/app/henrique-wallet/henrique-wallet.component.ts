import { Component, OnInit } from '@angular/core';
import {HenriqueWalletService} from "../henrique-wallet.service";

@Component({
  selector: 'app-henrique-wallet',
  templateUrl: './henrique-wallet.component.html',
  styleUrls: ['./henrique-wallet.component.css']
})
export class HenriqueWalletComponent implements OnInit {

  constructor(public walletService: HenriqueWalletService ) { }

  valorInput: number=0;


  ngOnInit(): void {
  }


  adicionar() {
    this.walletService.saldoBTC += this.valorInput / this.walletService.btc;
  }

  retirar() {
    this.walletService.saldoBTC -= this.valorInput / this.walletService.btc;
  }


}
