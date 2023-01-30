import styled from "styled-components";
export const StyledButton = styled.button`
    background: inherit;
    border-color: transparent;
    @media (max-width: 426px) {
            width:  ${({ size }) => {
        switch (size) {
            case "s":
                return '5rem'
            default:
                return '5rem'

        }
    }};
            height:  ${({ size }) => {
        switch (size) {
            case "s":
                return '5rem'
            default:
                return '5rem'

        }
    }};
    }
    width: ${({ size }) => {
        switch (size) {
            case "s":
                return '5rem'
            default:
                return '5.9rem'

        }
    }};
    height: ${({ size }) => {
        switch (size) {
            case "s":
                return '5rem'
            default:
                return '5.9rem'

        }
    }};
    cursor: pointer;
    vertical-align: bottom;
    color: ${({ type, theme, isDarkmode }) => {
        switch (type) {
            default:
                return theme.colors.secondary[500]
            case "lightbulb":
                return theme.colors.secondary.darkmode(isDarkmode)
            case "add":
                return theme.colors.add[500]
            case "done":
                return theme.colors.action[500]
            case "clear":
                return theme.colors.danger[500]
            case "unfold_more":
                return theme.colors.unfold[500]
            case "unfold_less":
                return theme.colors.unfold[500]
            case "edit":
                return theme.colors.action[500]
            case "delete":
                return theme.colors.danger[500];
        }
    }};
    transition: ${({ theme }) => theme.colors.animation};
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: ${({ boxShadow, theme }) => boxShadow !== undefined ? boxShadow + "!important" : theme.colors.boxShadows.out};
    & > * {
        
        @media (max-width: 426px) {
            font-size: ${({ size }) => {
        switch (size) {
            case "s":
                return '3rem'
            default:
                return '3rem'

        }
    }
    }};
        font-size: ${({ size }) => {
        switch (size) {
            case "s":
                return '3rem'
            default:
                return '3rem'

        }
    }};
        display: flex;
        justify-content: center;
    };
    &:hover {
        transition: ${({ theme }) => theme.colors.animation};
        box-shadow: ${({ boxShadow, theme }) => boxShadow !== undefined ? boxShadow + "!important" : theme.colors.boxShadows.in};
        color: ${({ type, theme, isDarkmode }) => {
        if (type === 'lightbulb')
            return theme.colors.secondary.darkmode(!isDarkmode)
    }};
    }
`