import { ButtonCircle } from "../../atoms/ButtonCircle/ButtonCircle"
import { FontHighlight } from "../../atoms/FontStyles/FontHighlight"
import { Fs } from "../../atoms/FontStyles/Hs"
import { Navbar } from "../../organisms/Navbar"
import { useState } from "react"
import { Note } from "../../organisms/Note"
import { useSelector } from "react-redux"
import { selectNotes } from "../../../reducers/notes"
import { NoteForm } from "../../molecules/NoteForm/NoteForm"
import { StyledWrapper } from "./styles"

export const Notes = () => {
    const notes  = useSelector(selectNotes)

    const [toggleAddForm, setToggleAddForm] = useState(false)
    const toggleAddHandle = () => setToggleAddForm(!toggleAddForm)
    return (
        <>
            <Navbar></Navbar>
            <StyledWrapper>
                <Fs styling={3}><FontHighlight>Your Notes</FontHighlight></Fs>
                <ButtonCircle onClick={toggleAddHandle} size={'s'} type={"add"}></ButtonCircle>
            </StyledWrapper>
            {toggleAddForm && <NoteForm formType={'add'} toggleEditHandle={toggleAddHandle}></NoteForm>}
            {notes.map(el => (
               <Note key={el._id} _id={el._id} title={el.title} description={el.description}></Note>
            ))}
        </>
    )
}