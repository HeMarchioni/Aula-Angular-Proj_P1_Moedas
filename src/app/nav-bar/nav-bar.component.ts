import { Component, OnInit } from '@angular/core';
import {HenriqueWalletService} from "../henrique-wallet.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public walletService: HenriqueWalletService ) { }

  ngOnInit(): void {
  }

}
