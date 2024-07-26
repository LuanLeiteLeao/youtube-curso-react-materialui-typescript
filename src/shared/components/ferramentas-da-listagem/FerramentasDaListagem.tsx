import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"

interface IProps {
    textoDaBusca?: string
    mostrarInputDeBusca?: boolean
    aoMudarTextoDaBusca?: (novoTexto: string) => void

    textoBotaoNovo?: string
    mostrarBotaoNovo?: boolean
    aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem: React.FC<IProps> = ({
    textoDaBusca = "",
    mostrarInputDeBusca = false,
    aoMudarTextoDaBusca,

    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    aoClicarEmNovo
}) => {
    const theme = useTheme()

    function inputTextoDeBusca() {
        return mostrarInputDeBusca && (
            <TextField
                size="small"
                value={textoDaBusca}
                placeholder="Pesquisar ..."
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
            />
        )
    }

    function inputBotaoNovo() {
        return mostrarBotaoNovo && (
            <Button
                color="primary"
                disableElevation
                variant="contained"
                onClick={aoClicarEmNovo}
                endIcon={<Icon>add</Icon>}
            >
                {textoBotaoNovo}
            </Button>
        )
    }

    return (
        <Box gap={1} marginX={1} padding={1} paddingX={2} display="flex" alignItems="center" height={theme.spacing(5)} component={Paper}>
            {inputTextoDeBusca()}

            <Box flex={1} display="flex" justifyContent="end">
                {inputBotaoNovo()}
            </Box>

        </Box>
    )


}