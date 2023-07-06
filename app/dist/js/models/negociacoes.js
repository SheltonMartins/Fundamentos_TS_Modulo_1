export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ultimo(arrayNegociacao) {
        return this.negociacoes[this.negociacoes.length - 1];
    }
}
