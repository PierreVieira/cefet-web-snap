import {getDataAtributes, marcacoesEl, nameClassMarcacao} from './marcacoesEl.js'

const marksVisibility = document.querySelector('#visibilidade-das-marcacoes')
const xMarkEl = document.querySelector('#x-da-marcacao')
const yMarkEl = document.querySelector('#y-da-marcacao')
const widthMarkEl = document.querySelector('#largura-da-marcacao')
const heightMarkEl = document.querySelector('#altura-da-marcacao')
const titleMarkEl = document.querySelector('#titulo-da-marcacao')
const contentMarkEl = document.querySelector('#conteudo-da-marcacao')
const colorMarkEl = document.querySelector('#cor-da-marcacao')

marksVisibility.addEventListener('click', _ => {
    const isChecked = marksVisibility.checked
    control(isChecked)
})

marcacoesEl.forEach(marcacaoEl => {
    marcacaoEl.addEventListener('click', _ => {
        removeAllSelecionada()
        marcacaoEl.classList.add('selecionada')
        updateControls(marcacaoEl)
    })
})

function control(isChecked) {
    marcacoesEl.forEach(marcacaoEl => {
        if (isChecked) {
            marcacaoEl.classList.remove(`${nameClassMarcacao}`)
        } else {
            marcacaoEl.classList.add(`${nameClassMarcacao}`)
        }
    })
}

function removeAllSelecionada() {
    marcacoesEl.forEach(marcacoesEl => {
        marcacoesEl.classList.remove('selecionada')
    })
}

function updateControls(marcacaoEl) {
    const style = marcacaoEl.style
    const [x, y, width, height] = getIntAttributes(style)
    const [title, content, color] = getDataAtributes(marcacaoEl)
    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular'
    setFront(x, y, width, height, title, content, color, formato);
}

function getIntAttributes(style) {
    return [parseInt(style.top), parseInt(style.left), parseInt(style.width), parseInt(style.height)];
}

function setFront(x, y, width, height, title, content, color, formato) {
    xMarkEl.value = x
    yMarkEl.value = y
    widthMarkEl.value = width
    heightMarkEl.value = height
    titleMarkEl.value = title
    contentMarkEl.value = content
    colorMarkEl.value = color
    const inputFormat = document.querySelector(`input[value="${formato}"]`)
    inputFormat.checked = true
}
