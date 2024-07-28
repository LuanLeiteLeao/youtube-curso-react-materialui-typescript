import { FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBaseDaPagina } from "../../shared/layouts"

export const DashBoard = () => {
    return (
        <LayoutBaseDaPagina titulo="Página inicial" barraDeFerramentas={<FerramentasDeDetalhe   mostrarBotaoSalvarEFeichar mostrarBotaoSalvarEFeicharCarregando mostrarBotaoSalvarCarregando/>}>
            Test
        </LayoutBaseDaPagina>
    )
}