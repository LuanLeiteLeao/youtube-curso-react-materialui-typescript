import { createContext, useCallback, useContext, useState } from "react"

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
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

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])



    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>

    )
}

