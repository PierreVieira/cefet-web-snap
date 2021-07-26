import {getBalloonAtributes} from "./utils/ballon.js"
import {EventType} from "./utils/enums/event-type.js"
import {balaozinhoEL, marcacoesEl} from "./utils/dom/elements-html.js";

function registerMouseEnterEvent(marcacaoEl) {
    marcacaoEl.addEventListener(EventType.MOUSE_OVER, _ => {
        const [title, content, color] = getBalloonAtributes(marcacaoEl)
        balaozinhoEL.innerHTML = `<h2>${title}</h2><p>${content}</p>`
        balaozinhoEL.style.color = color
    })
}

function registerMouseExitEvent(marcacaoEl) {
    marcacaoEl.addEventListener(EventType.MOUSE_OUT, _ => {
        balaozinhoEL.innerHTML = ''
    })
}

function registerMouseMoveEvent(marcacaoEl) {
    marcacaoEl.addEventListener(EventType.MOUSE_MOVE, e => {
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