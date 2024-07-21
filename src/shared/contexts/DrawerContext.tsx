import { createContext, useCallback, useContext, useState } from "react"

interface IDrawerOption {
    icon: string
    path: string
    label: string
}

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
    drawerOptions: IDrawerOption[]
    setDrawerOptions: (drawerOptions: IDrawerOption[]) => void
}

interface IPorps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}



export const DrawerProvider: React.FC<IPorps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((drawerOptions: IDrawerOption[]) => {
        setDrawerOptions(drawerOptions)
    }, [])




    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>

    )
}

