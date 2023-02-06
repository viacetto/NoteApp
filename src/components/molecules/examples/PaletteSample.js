import { Fs } from "../../atoms/FontStyles/Hs"

export const PaletteSample = (props) => {
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