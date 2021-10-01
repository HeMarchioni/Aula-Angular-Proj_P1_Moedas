export class CotacaoMoeda {

    time: {
        updated: string
    };
    cotacaoReal: {
        USD: {
            valor: number
        };
        BTC: {
            valor: number
        };
        EUR: {
            valor: number
        };
    }


    constructor(time: { updated: string }, cotacaoReal: { USD: { valor: number }; BTC: { valor: number }; EUR: { valor: number } }) {
        this.time = time;
        this.cotacaoReal = cotacaoReal;
    }
}
