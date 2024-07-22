import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../contexts"
import { ReactNode } from "react"

interface IProps {
    titulo: string
    children: ReactNode
    barraDeFerramentas?: ReactNode
}


export const LayoutBaseDaPagina: React.FC<IProps> = (props) => {
    const theme = useTheme()
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"))
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"))
    const { toggleDrawerOpen } = useDrawerContext()

    function getResponsiveTypographyVariant() {
        return isSmDown ? "h5" : isMdDown ? "h4" : "h3"
    }

    function getResponsiveBoxHeight() {
        return theme.spacing(isSmDown ? 6 : isMdDown ? 8 : 12)
    }

    function botaoDeMenuResponsivo() {
        return isSmDown && (
            <IconButton onClick={toggleDrawerOpen}>
                <Icon>menu</Icon>
            </IconButton>
        )
    }

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>

            <Box padding={1} display="flex" alignItems="center" height={getResponsiveBoxHeight()}>
                {botaoDeMenuResponsivo()}
                <Typography overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" variant={getResponsiveTypographyVariant()}>
                    {props.titulo}
                </Typography>
            </Box>

            {props.barraDeFerramentas && (
                <Box>
                    {props.barraDeFerramentas}
                </Box>
            )}


            <Box flex={1} overflow="auto">
                {props.children}
            </Box>


        </Box>
    )






}