const nameClassMarcacao = 'marcacao'

const controlesMarcacaoEl = document.querySelector('#visibilidade-das-marcacoes')
const marcacoesEl = document.querySelectorAll(`.${nameClassMarcacao}`)

controlesMarcacaoEl.addEventListener('click', _ => {
    const isChecked = controlesMarcacaoEl.checked
    control(isChecked)
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
