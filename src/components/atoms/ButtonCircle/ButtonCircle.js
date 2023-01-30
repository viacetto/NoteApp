import { Icon } from '../Icon/Icon'
import { StyledButton } from './styles'

export const ButtonCircle = (props) => {
    return (
        <StyledButton tabIndex={props.tabindex} {...props}>
            <Icon {...props} />
        </StyledButton>
    )
}