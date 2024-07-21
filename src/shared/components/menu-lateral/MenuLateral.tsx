
import { Avatar, Box, Divider, Drawer, List, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../contexts"
import React from "react"
import { ListItemLink } from "./ListItemLink"

interface IPorps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IPorps> = ({ children }) => {
    const theme = useTheme()
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"))
    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()

    function avatarBox() {
        return (
            <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                <Avatar
                    sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                    src="https://yt3.ggpht.com/grfYgQadT8iNg9WPb-jkrKB-9224y_DBDXAOtV4Yt7cyQmtR47J_453uveQOTDsp_dRSH851TMM=s108-c-k-c0x00ffffff-no-rj" />
            </Box>
        )
    }

    const boxListItens = () => (
        <Box flex={1}>
            <List component="nav">
                {drawerOptions.map(drawerOptions => (
                    <ListItemLink
                        to={drawerOptions.path}
                        key={drawerOptions.path}
                        icon={drawerOptions.icon}
                        label={drawerOptions.label}
                        onClick={isSmDown ? toggleDrawerOpen : undefined} />
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Drawer open={isDrawerOpen} variant={isSmDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >
                    {avatarBox()}
                    <Divider />
                    {boxListItens()}
                </Box>

            </Drawer>

            <Box height="100vh" marginLeft={isSmDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )


}