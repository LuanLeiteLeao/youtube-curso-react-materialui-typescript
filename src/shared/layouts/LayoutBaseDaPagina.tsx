import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../contexts"

interface IProps {
    titulo: string
    children: React.ReactNode
}


export const LayoutBaseDaPagina: React.FC<IProps> = (props) => {
    const theme = useTheme()
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"))
    const { toggleDrawerOpen } = useDrawerContext()

    function botaoDeMenuResponsivo() {
        return isSmDown && (
            <IconButton onClick={toggleDrawerOpen}>
                <Icon>menu</Icon>
            </IconButton>
        )
    }

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>

            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)}>

                {botaoDeMenuResponsivo()}
                <Typography variant="h5">
                    {props.titulo}
                </Typography>
            </Box>

            <Box>
                Barra de ferramentas
            </Box>

            <Box>
                {props.children}
            </Box>


        </Box>
    )


}