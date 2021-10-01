import { Component, OnInit } from '@angular/core';
import {HenriqueWalletService} from "../henrique-wallet.service";

@Component({
  selector: 'app-henrique-currency',
  templateUrl: './henrique-currency.component.html',
  styleUrls: ['./henrique-currency.component.css']
})
export class HenriqueCurrencyComponent implements OnInit {

  constructor(public walletService: HenriqueWalletService ) { }

  ngOnInit(): void {
  }

}
