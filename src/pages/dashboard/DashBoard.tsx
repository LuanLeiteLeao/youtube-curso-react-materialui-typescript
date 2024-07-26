import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDaPagina } from "../../shared/layouts"

export const DashBoard = () => {
    return (
        <LayoutBaseDaPagina titulo="Página inicial" barraDeFerramentas={<FerramentasDaListagem mostrarInputDeBusca textoBotaoNovo="Nova"/>}>
            Test
        </LayoutBaseDaPagina>
    )
}