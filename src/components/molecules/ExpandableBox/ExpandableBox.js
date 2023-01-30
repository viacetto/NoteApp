import { useState } from "react"
import { ButtonCircle } from "../../atoms/ButtonCircle/ButtonCircle"
import { useStore } from "react-redux"
import { HeaderWrapper, ButtonsWrapper, StyledHeader, StyledDescription } from './styles'
export const ExpandableBox = ({ title, description, _id, toggleEditHandle }) => {
    const store = useStore()
    const [collapsed, setCollapsed] = useState(true)
    const deleteNoteHandle = () => {
        store.dispatch({ type: 'DELETE_NOTE', _id: _id })
    }
    return (
        <>
            <HeaderWrapper>
                <StyledHeader styling={4}>{title}</StyledHeader>
                <ButtonsWrapper>
                    <ButtonCircle onClick={() => setCollapsed(!collapsed)} className='card-btn' size='s' type={collapsed ? "unfold_more" : "unfold_less"}></ButtonCircle>
                    <ButtonCircle onClick={toggleEditHandle} className='card-btn' size='s' type={"edit"}></ButtonCircle>
                    <ButtonCircle onClick={deleteNoteHandle} className='card-btn' size='s' type={"delete"}></ButtonCircle>
                </ButtonsWrapper>
            </HeaderWrapper>
            {!collapsed && <StyledDescription weight={500} styling={6}>{description}</StyledDescription>}</>
    )
}