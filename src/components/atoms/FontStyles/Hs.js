import { StyledSpan } from "./styles"

export const Fs = (props) => {
    return (
        <StyledSpan {...props}>{props.children}</StyledSpan>
    )
}