import { useState } from "react"
import { useStore } from "react-redux"
import { ButtonCircle } from "../../atoms/ButtonCircle/ButtonCircle"
import { Card } from "../../atoms/Card/Card"
import { Input } from "../../atoms/Input/Input"
import { ButtonsWrapper } from "../ExpandableBox/styles"
import { UpperPart } from "./styles"

export const NoteForm = ({ toggleEditHandle, title, description, _id, formType }) => {
    const [formError, setFormError] = useState(false)
    const store = useStore()
    const [formValues, setFormValues] = useState({
        title: title || '',
        description: description || ''
    })

    const setValues = ({ name, value }) => {
        switch (name) {
            case "title":
                return setFormValues({ ...formValues, title: value })
            case "description":
                return setFormValues({ ...formValues, description: value })
            default:
        }
    }

    const doneNoteHandle = () => {
        switch (formType) {
            case 'add':
                if (formValues.title.replaceAll(/\s/g, '') === ''
                    || formValues.title.replaceAll(/\s/g, '') === '') {
                    setFormError(true)
                    return
                }
                store.dispatch({ type: 'ADD_NOTE', _id: 'note_' + Date.now(), title: formValues.title, description: formValues.description })
                toggleEditHandle()
                break;
            case 'edit':
                if (formValues.title.replaceAll(/\s/g, '') === ''
                    || formValues.title.replaceAll(/\s/g, '') === '') {
                    setFormError(true)
                    return
                }
                store.dispatch({ type: 'EDIT_NOTE', _id: _id, title: formValues.title, description: formValues.description })
                toggleEditHandle()
                break;
            default:
        }
    }
    return (
        <Card>
            <UpperPart error={formError}>
                <Input tabindex={"1"} name={'title'} changeHandler={setValues} val={formValues.title} placeholder='Title...'></Input>
                <ButtonsWrapper>
                    <ButtonCircle tabindex={"2"} onClick={doneNoteHandle} className='card-btn' size='s' type={"done"}></ButtonCircle>
                    <ButtonCircle tabindex={"2"} onClick={toggleEditHandle} className='card-btn' size='s' type={"clear"}></ButtonCircle>
                </ButtonsWrapper>
            </UpperPart>
            <Input tabindex={"1"} name={'description'} changeHandler={setValues} val={formValues.description} placeholder="Description..."></Input>
        </Card>
    )
} 