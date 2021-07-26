import {
    colorDataAttribute,
    colorMarkEl,
    contentDataAttribute,
    contentMarkEl, heightMarkEl,
    titleDataAttribute,
    titleMarkEl,
    widthMarkEl,
    xMarkEl,
    yMarkEl
} from "./dom/elements-html.js";
import {nameClassOvalFormat, nameClassRectFormat, nameClassSelecionada} from "./dom/elements-css.js";

function _getSelecionada() {
    return document.querySelector(`.${nameClassSelecionada}`)
}

function _safeModifier(modifier) {
    const marcacaoEl = _getSelecionada()
    if (marcacaoEl) {
        modifier(marcacaoEl)
    }
}

export const updateXStyle = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.style.left = `${xMarkEl.value}px`
    })
}

export const updateYStyle = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.style.top = `${yMarkEl.value}px`
    })
}

export const updateWidthStyle = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.style.width = `${widthMarkEl.value}px`
    })
}

export const updateHeightStyle = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.style.height = `${heightMarkEl.value}px`
    })
}

export const updateTitle = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.setAttribute(titleDataAttribute, titleMarkEl.value)
    })
}

export const updateContent = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.setAttribute(contentDataAttribute, contentMarkEl.value)
    })
}

export const updateColor = _ => {
    _safeModifier((marcacaoEl) => {
        marcacaoEl.setAttribute(colorDataAttribute, colorMarkEl.value)
    })
}

function _updateTo(marcacaoEl, nameClass) {
    if (!marcacaoEl.classList.contains(nameClass)) {
        if (nameClass === nameClassRectFormat) {
            marcacaoEl.classList.remove(nameClassOvalFormat)
        } else {
            marcacaoEl.classList.remove(nameClassRectFormat)
        }
        marcacaoEl.classList.add(nameClass)
    }
}

export const updateToRectangle = _ => {
    _safeModifier((marcacaoEl) => {
        _updateTo(marcacaoEl, nameClassRectFormat);
    })
}

export const updateToOval = _ => {
    _safeModifier((marcacaoEl) => {
        _updateTo(marcacaoEl, nameClassOvalFormat)
    })
}