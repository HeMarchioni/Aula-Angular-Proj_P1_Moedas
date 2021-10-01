import {Component, OnInit} from '@angular/core';
import {HenriqueWalletService} from "./henrique-wallet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public walletService: HenriqueWalletService) {
  }

  ngOnInit(): void {

    this.walletService.start();

  }

}
