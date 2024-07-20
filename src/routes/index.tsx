import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppThemeProvider } from "../shared/contexts/ThemeContext"

export const AppRoutes = () => {

    const {toggleTheme} = useAppThemeProvider()

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}