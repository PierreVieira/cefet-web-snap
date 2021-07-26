import {nameClassOvalFormat, nameClassRectFormat} from "./elements-css.js";

export const marksVisibilityEl = document.querySelector('#visibilidade-das-marcacoes')
export const xMarkEl = document.querySelector('#x-da-marcacao')
export const yMarkEl = document.querySelector('#y-da-marcacao')
export const widthMarkEl = document.querySelector('#largura-da-marcacao')
export const heightMarkEl = document.querySelector('#altura-da-marcacao')
export const titleMarkEl = document.querySelector('#titulo-da-marcacao')
export const contentMarkEl = document.querySelector('#conteudo-da-marcacao')
export const colorMarkEl = document.querySelector('#cor-da-marcacao')
export const firstSelectedEl = document.querySelector('.selecionada')
export const rectOptionEl = document.querySelector(`input[value="${nameClassRectFormat}"]`)
export const ovalOptionEl = document.querySelector(`input[value="${nameClassOvalFormat}"]`)
export const balaozinhoEL = document.querySelector('#balaozinho')
export const titleDataAttribute = 'data-titulo'
export const contentDataAttribute = 'data-conteudo'
export const colorDataAttribute = 'data-cor'