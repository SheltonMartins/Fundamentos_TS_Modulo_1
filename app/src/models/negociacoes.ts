import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    /* Fabricio, nessa parte estou pegando o ultimo elemento do array Negociacoes 
    - veja em negociacoes-controller*/
    public ultimo(arrayNegociacao: Negociacoes): Negociacao {
        return this.negociacoes[this.negociacoes.length - 1]
    }
}
