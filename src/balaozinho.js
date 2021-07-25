import {getDataAtributes, marcacoesEl} from './marcacoesEl.js'
const balaozinhoEL = document.querySelector('#balaozinho')

function registerMouseEnterEvent(marcacaoEl) {
    marcacaoEl.addEventListener('mouseover', _ => {
        const [title, content, color] = getDataAtributes(marcacaoEl)
        balaozinhoEL.innerHTML = `<h2>${title}</h2><p>${content}</p>`
        balaozinhoEL.style.color = color
    })
}

function registerMouseExitEvent(marcacaoEl) {
    marcacaoEl.addEventListener('mouseout', _ => {
        balaozinhoEL.innerHTML = ''
    })
}

function registerMouseMoveEvent(marcacaoEl) {
    marcacaoEl.addEventListener('mousemove', e => {
        const [x, y] = [e.pageX, e.pageY]
        balaozinhoEL.style.left = `${x}px`
        balaozinhoEL.style.top = `${y}px`
    })
}

marcacoesEl.forEach(marcacaoEl => {
    registerMouseEnterEvent(marcacaoEl);
    registerMouseExitEvent(marcacaoEl);
    registerMouseMoveEvent(marcacaoEl)
})