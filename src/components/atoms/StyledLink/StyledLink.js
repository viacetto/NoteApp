import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "styled-components"

export const StyledLink = (props) => {
    const theme = useContext(ThemeContext)
    return (
        <Link style={{
            color: theme.colors.secondary[500],
            textDecoration: "none"
        }} {...props}></Link>
    )
}