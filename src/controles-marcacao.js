import {
    colorMarkEl,
    contentMarkEl,
    firstSelectedEl,
    heightMarkEl, marcacoesEl,
    marksVisibilityEl,
    ovalOptionEl,
    rectOptionEl,
    titleMarkEl,
    widthMarkEl,
    xMarkEl,
    yMarkEl
} from "./utils/dom/elements-html.js";
import {
    updateColor,
    updateContent,
    updateHeightStyle,
    updateTitle,
    updateToOval,
    updateToRectangle,
    updateWidthStyle,
    updateXStyle,
    updateYStyle
} from "./utils/update-mark.js";
import {getBalloonAtributes} from "./utils/ballon.js";
import {EventType} from "./utils/enums/event-type.js";
import {
    nameClassMarcacaoOculta,
    nameClassOvalFormat,
    nameClassRectFormat,
    nameClassSelecionada
} from "./utils/dom/elements-css.js";

if (firstSelectedEl) {
    updateControls(firstSelectedEl)
    updateElementAttributes(firstSelectedEl)
}

marksVisibilityEl.addEventListener(EventType.CLICK, _ => {
    const isChecked = marksVisibilityEl.checked
    control(isChecked)
})

function updateElementAttributes() {
    xMarkEl.addEventListener(EventType.INPUT, updateXStyle)
    yMarkEl.addEventListener(EventType.INPUT, updateYStyle)
    widthMarkEl.addEventListener(EventType.INPUT, updateWidthStyle)
    heightMarkEl.addEventListener(EventType.INPUT, updateHeightStyle)
    titleMarkEl.addEventListener(EventType.INPUT, updateTitle)
    contentMarkEl.addEventListener(EventType.INPUT, updateContent)
    colorMarkEl.addEventListener(EventType.INPUT, updateColor)
    rectOptionEl.addEventListener(EventType.CLICK, updateToRectangle)
    ovalOptionEl.addEventListener(EventType.CLICK, updateToOval)
}

marcacoesEl.forEach(marcacaoEl => {
    marcacaoEl.addEventListener(EventType.CLICK, e => {
        marcacaoEl = e.currentTarget
        removeAllSelecionada()
        marcacaoEl.classList.add(nameClassSelecionada)
        updateControls(marcacaoEl)
        updateElementAttributes()
    })
})

function control(isChecked) {
    marcacoesEl.forEach(marcacaoEl => {
        if (isChecked) {
            marcacaoEl.classList.add(`${nameClassMarcacaoOculta}`)
        } else {
            marcacaoEl.classList.remove(`${nameClassMarcacaoOculta}`)
        }
    })
}

function removeAllSelecionada() {
    marcacoesEl.forEach(marcacoEl => {
        marcacoEl.classList.remove(nameClassSelecionada)
    })
}

function updateControls(marcacaoEl) {
    const style = marcacaoEl.style
    const [x, y, width, height] = getIntAttributes(style)
    const [title, content, color] = getBalloonAtributes(marcacaoEl)
    const formato = marcacaoEl.classList.contains(nameClassOvalFormat) ? nameClassOvalFormat : nameClassRectFormat
    setFront(x, y, width, height, title, content, color, formato);
}

function getIntAttributes(style) {
    return [parseInt(style.left), parseInt(style.top), parseInt(style.width), parseInt(style.height)];
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
