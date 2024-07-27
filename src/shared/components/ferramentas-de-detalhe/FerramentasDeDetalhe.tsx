import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"

interface IProps {
    textoBotaoNovo?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarEFeichar?: boolean

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

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFeichar,
}) => {

    const theme = useTheme()

    return (
        <Box gap={1} marginX={1} padding={1} paddingX={2} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>

            {
                mostrarBotaoSalvar && (
                    <Button color="primary" disableElevation variant="contained" onClick={aoClicarEmSalvar} startIcon={<Icon>save</Icon>}>
                        Salvar
                    </Button>
                )
            }

            {
                mostrarBotaoSalvarEFeichar && (
                    <Button color="primary" disableElevation variant="outlined" onClick={aoClicarEmSalvarEFeichar} startIcon={<Icon>save</Icon>}>
                        Salvar e voltar
                    </Button>
                )
            }

            {
                mostrarBotaoApagar && (
                    <Button color="primary" disableElevation variant="outlined" onClick={aoClicarEmApagar} startIcon={<Icon>delete</Icon>}>
                        Apagar
                    </Button>
                )
            }

            {
                mostrarBotaoNovo && (
                    <Button color="primary" disableElevation variant="outlined" onClick={aoClicarEmNovo} startIcon={<Icon>add</Icon>}>
                        {textoBotaoNovo}
                    </Button>
                )
            }


            <Divider variant="middle" orientation="vertical" />

            {
                mostrarBotaoVoltar && (
                    <Button color="primary" disableElevation variant="outlined" onClick={aoClicarEmVoltar} startIcon={<Icon>arrow_back</Icon>}>
                        Voltar
                    </Button>
                )
            }


        </Box>
    )
}