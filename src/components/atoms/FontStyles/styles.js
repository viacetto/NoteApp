import styled from "styled-components"
export const StyledSpanHighlight = styled.span`
    color: ${({color, theme})=> color|| theme.colors.special[800]};
    white-space: ${({pre})=> pre && "pre"};
    font-weight: ${({ weight }) => weight || 800};
    font-size: ${({ theme, styling }) => {
        switch (styling) {
            case 1:
                return '6rem'
            case 2:
                return '5rem'
            case 3:
                return '3rem'
            case 4:
                return '2rem'
            case 5:
                return '1.5rem'
            case 6:
                return '1.5rem'
                default:
        }
    }};
`
export const StyledSpan = styled.span`
@media (max-width: 426px) {
    font-size: ${({ theme, styling }) => {
        switch (styling) {
            case 1:
                return '6rem'
            case 2:
                return '5rem'
            case 3:
                return '3rem'
            case 4:
                return '2rem'
            case 5:
                return '1.5rem'
            case 6:
                return '1.5rem'
                default:
        }
    }};
  }

font-size: ${({ theme, styling }) => {
        switch (styling) {
            case 1:
                return '6rem'
            case 2:
                return '5rem'
            case 3:
                return '3rem'
            case 4:
                return '3rem'
            case 5:
                return '2.5rem'
            case 6:
                return '2rem'
                default:
        }
    }};
    font-weight: ${({ weight }) => weight || 800};
 color:${({ color, theme }) => color || theme.colors.secondary[500]};
display: ${({ d}) => d || 'block'};
`