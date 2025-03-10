import { Navigate, Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react"
import { DashBoard } from "../pages"

export const AppRoutes = () => {

    const { setDrawerOptions } = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/pagina-inicial",
                label: "Página inicial"
            }
        ])
    }, [setDrawerOptions])

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<DashBoard />} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}