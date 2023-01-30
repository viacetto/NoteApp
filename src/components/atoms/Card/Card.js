import { StyledWrapper } from "./styles"

export const Card = (props) => {
    return (
        <StyledWrapper {...props}>
            {props.children}
        </StyledWrapper>
    )
}