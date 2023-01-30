import { useRef, useState } from "react"
import { StyledInput } from "./styles"

export const Input = (props) => {
    const [val, setVal] = useState(props.val || '')
    const inputRef = useRef()
    const onChangeHandle = () => {
        props.changeHandler && props.changeHandler(inputRef.current)
        setVal(inputRef.current.value)
    }
    props = {
        ...props,
        name: props.name,
        ref: inputRef,
        value: val,
        onChange: onChangeHandle
    }
    return (
        <StyledInput tabIndex={props.tabindex}
            {...props}>
        </StyledInput>
    )
}