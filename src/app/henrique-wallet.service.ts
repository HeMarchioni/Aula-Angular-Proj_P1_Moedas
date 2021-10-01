import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CotacaoMoeda} from "./cotacaoMoeda";

@Injectable({
  providedIn: 'root'
})



export class HenriqueWalletService {


  setaBTC: string = "-";
  setaUSD: string = "-";
  setaEUR: string = "-";

  time: string;
  euroBtc: number;
  dolarBtc: number;
  btc: number;

  saldoBTC: number = 0;

  cotacaoAtual: CotacaoMoeda;

  cotaMoedas: Array<CotacaoMoeda> = [];


  constructor(private http: HttpClient) { }


  getCotaMoedas() {


    let cotacaoMoedas = new CotacaoMoeda({ updated: this.time },
        { USD: { valor: this.btc/this.dolarBtc },
                  BTC: { valor: this.btc},
                  EUR: { valor: this.btc/this.euroBtc}
    });

    this.cotaMoedas.push(cotacaoMoedas);
    this.comparar(cotacaoMoedas);
    this.cotacaoAtual = cotacaoMoedas;

  }



  requisicao(){

    this.http.get<BitCoinBrl>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json").subscribe(data => {
      this.time = data.time.updated;
      this.dolarBtc = data.bpi.USD.rate_float;
      this.btc = data.bpi.BRL.rate_float;


      requisicao2()
    }, error => console.log('Problema na requisição 1', error)

    );


    const requisicao2 = () => {
      this.http.get<BitCoinBrl>("https://api.coindesk.com/v1/bpi/currentprice/EUR.json").subscribe(data => {
        this.euroBtc = data.bpi.EUR.rate_float;
        this.getCotaMoedas()

      },error => console.log('Problema na requisição 2', error)
      );
    }

  }


  comparar(cotaNova:CotacaoMoeda) {

    if (this.cotacaoAtual != undefined) {

      let compBtc: number = this.cotacaoAtual.cotacaoReal.BTC.valor - cotaNova.cotacaoReal.BTC.valor;
      let compUsd: number = this.cotacaoAtual.cotacaoReal.USD.valor - cotaNova.cotacaoReal.USD.valor;
      let compEur: number = this.cotacaoAtual.cotacaoReal.EUR.valor - cotaNova.cotacaoReal.EUR.valor;


      this.setaBTC = comparar2(compBtc);
      this.setaUSD = comparar2(compUsd);
      this.setaEUR = comparar2(compEur);


      function comparar2(comp: number): string {

        if (comp > 0) {
          return "↓"
        } else if (comp < 0) {
          return "↑";
        } else {
          return "-"
        }

      }

    }


  }


  start() {
    this.requisicao();
    setInterval(() => {
      this.requisicao();
    },60000);
  }


}

interface BitCoinBrl {

  time: {
    updated: string
  };
  bpi: {
    USD: {
      rate_float: number
    };
    BRL: {
      rate_float: number
    };
    EUR: {
      rate_float: number
    };
  }

}
