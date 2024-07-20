import { Box, ThemeProvider } from "@mui/material";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";


type ThemeMode = 'light' | 'dark'

interface IThemeContextData {
    themeName: ThemeMode;
    toggleTheme: () => void

}

interface IProps {
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeProvider = () => useContext(ThemeContext)

export const AppThemeProvider: React.FC<IProps> = ({ children }) => {

    const [themeName, setThemeName] = useState<ThemeMode>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        return themeName === 'light' ? LightTheme : DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>

            </ThemeProvider>
        </ThemeContext.Provider>
    )
}