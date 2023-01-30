import { StyledSpanHighlight } from "./styles"

export const FontHighlight = (props) => {
    return (
        <StyledSpanHighlight {...props}>{props.children}</StyledSpanHighlight>
    )
}