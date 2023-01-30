import styled from "styled-components"
export const UpperPart = styled.div`
    display:flex;
    position: relative;
    &::before {
        font-weight: bold;
        content: "title can't be empty";
        position: absolute;
        top: -10px;
        left: 18px;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.danger[500]};
        display: ${({ error }) => error ? 'block' : 'none'}
    };
      
    & input {
        flex: 1 1 0%;
        width: 1%;
    }
`

