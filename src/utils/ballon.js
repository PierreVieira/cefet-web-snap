import {colorDataAttribute, contentDataAttribute, titleDataAttribute} from "./dom/elements-html.js";

const getTitleFrom = (marcacaoEl) => {
    return marcacaoEl.getAttribute(titleDataAttribute);
}

const getContentFrom = (marcacaoEl) => {
    return marcacaoEl.getAttribute(contentDataAttribute);
}

const getColorFrom = (marcacaoEl) => {
    return marcacaoEl.getAttribute(colorDataAttribute);
}

export const getBalloonAtributes = (marcacaoEl) => {
    const title = getTitleFrom(marcacaoEl)
    const content = getContentFrom(marcacaoEl)
    const color = getColorFrom(marcacaoEl)
    return [title, content, color]
}