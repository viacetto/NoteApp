import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Fs } from "../../atoms/FontStyles/Hs"

export const PaletteSample = (props) => {
    const theme = useContext(ThemeContext)
    const paletteBorder = `1px solid ${theme.colors.secondary[800]}`
    return (
        <span>
            <Fs className='fs-header' styling={5}>
             {props.children}
                <span className='palette-sample' style={{
                    background: props.background
                }}>
                </span>
            </Fs>
        </span>
    )
}