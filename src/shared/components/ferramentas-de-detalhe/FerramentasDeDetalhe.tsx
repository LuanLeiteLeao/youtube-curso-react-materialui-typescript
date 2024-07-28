import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material"


interface IProps {
    textoBotaoNovo?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarEFeichar?: boolean

    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoVoltarCarregando?: boolean
    mostrarBotaoApagarCarregando?: boolean
    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoSalvarEFeicharCarregando?: boolean

    aoClicarEmNovo?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmSalvarEFeichar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFeichar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFeicharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFeichar,
}) => {

    const theme = useTheme()

    interface IToggleLoadButton {
        loading: {
            isShowButton: boolean,
            button: JSX.Element
        },
        button: {
            isShowButton: boolean,
            button: JSX.Element
        }
    }


    return (
        <Box gap={1} marginX={1} padding={1} paddingX={2} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>

            {botaoSalvar()}
            {botaoSalvarVoltar()}
            {botaoApagar()}
            {botaoNovo()}

            <Divider variant="middle" orientation="vertical" />

            {botaoVoltar()}


        </Box>
    )

    function botaoVoltar() {
        return toggleBetweenChargingAndLoaded({
            loading: {
                isShowButton: mostrarBotaoVoltarCarregando,
                button: (<Skeleton width={180} height={60} />)
            },
            button: {
                isShowButton: mostrarBotaoVoltar,
                button: (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={aoClicarEmVoltar}
                        startIcon={<Icon>arrow_back</Icon>}>
                        Voltar
                    </Button>
                )
            }
        })
    }

    function botaoNovo() {
        return toggleBetweenChargingAndLoaded({
            loading: {
                isShowButton: mostrarBotaoNovoCarregando,
                button: (< Skeleton width={110} height={60} />)
            },
            button: {
                isShowButton: mostrarBotaoNovo,
                button: (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={aoClicarEmNovo}
                        startIcon={<Icon>add</Icon>}>
                        {textoBotaoNovo}
                    </Button>
                )
            }
        })
    }

    function botaoApagar() {
        return toggleBetweenChargingAndLoaded({
            loading: {
                isShowButton: mostrarBotaoApagarCarregando,
                button: (<Skeleton width={180} height={60} />)

            },
            button: {
                isShowButton: mostrarBotaoApagar,
                button: (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={aoClicarEmApagar}
                        startIcon={<Icon>delete</Icon>}>
                        Apagar
                    </Button>
                )

            }
        })
    }

    function botaoSalvarVoltar() {
        return toggleBetweenChargingAndLoaded({
            loading: {
                isShowButton: mostrarBotaoSalvarEFeicharCarregando,
                button: (<Skeleton width={180} height={60} />)

            },
            button: {
                isShowButton: mostrarBotaoSalvarEFeichar,
                button: (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={aoClicarEmSalvarEFeichar}
                        startIcon={<Icon>save</Icon>}>
                        Salvar e voltar
                    </Button>
                )

            }
        })
    }

    function botaoSalvar() {
        return toggleBetweenChargingAndLoaded({
            loading: {
                isShowButton: mostrarBotaoSalvarCarregando,
                button: (<Skeleton width={110} height={60} />)
            },
            button: {
                isShowButton: mostrarBotaoSalvar,
                button: (
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        onClick={aoClicarEmSalvar}
                        startIcon={<Icon>save</Icon>}>
                        Salvar
                    </Button>
                )
            }
        })

    }

    function toggleBetweenChargingAndLoaded(toggleLoadButton: IToggleLoadButton) {
        if (toggleLoadButton.button.isShowButton) {
            if (toggleLoadButton.loading.isShowButton) {
                return toggleLoadButton.loading.button
            } else {
                return toggleLoadButton.button.button

            }
        }
    }
}