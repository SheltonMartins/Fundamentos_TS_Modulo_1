import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>AÇÃO</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                            <td>
                                <button id="${negociacao.id}" class="btn btn-danger">Desfazer</button>
                            </td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
