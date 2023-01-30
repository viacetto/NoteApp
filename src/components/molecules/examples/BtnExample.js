import { ButtonCircle } from "../../atoms/ButtonCircle/ButtonCircle"
import { Fs } from "../../atoms/FontStyles/Hs"

export const BtnExample = ({type, children}) => {
    return (
        <span className='direct-container'>
            <ButtonCircle type={type}></ButtonCircle>
            <Fs className='btn-text' styling={6}>{children}</Fs>
        </span>
    )
}