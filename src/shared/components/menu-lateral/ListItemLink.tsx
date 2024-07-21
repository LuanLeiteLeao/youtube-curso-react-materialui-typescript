import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"

interface IProps {
    to: string
    icon: string
    label: string
    onClick: (() => void) | undefined
}

export const ListItemLink: React.FC<IProps> = (props) => {

    const navigate = useNavigate()
    const resolvedpath = useResolvedPath(props.to)
    const match = useMatch({ path: resolvedpath.pathname, end: false })

    const handleClick = () => {
        navigate(props.to)
        props.onClick?.()
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{props.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItemButton>
    )
}