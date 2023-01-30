import { StyledLink } from "../atoms/StyledLink/StyledLink"

export const NavbarItem = (props) => {
    return (
        <StyledLink {...props}>
            <span className="material-icons">{props.icon}</span>
        </StyledLink>
    )
}