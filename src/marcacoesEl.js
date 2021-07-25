export const nameClassMarcacao = 'marcacao'
export const marcacoesEl = document.querySelectorAll(`.${nameClassMarcacao}`)
export const getDataAtributes = (marcacaoEl) => {
    const title = marcacaoEl.getAttribute('data-titulo')
    const content = marcacaoEl.getAttribute('data-conteudo')
    const color = marcacaoEl.getAttribute('data-cor')
    return [title, content, color]
}