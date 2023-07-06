import { NegociacaoController } from "../controllers/negociacao-controller.js";

export class Negociacao {

    constructor(
        
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    /* Fabricio, aqui eu estou criando um ID "artificial" pra conseguir passar para o DOM 
    atraves de view.ts.
    Meu objetivo é apagar uma negociacao atraves do id criado.
    */
    get id(): number {

        const id = new NegociacaoController().lastElement()

        return id + 1
    }

  

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}