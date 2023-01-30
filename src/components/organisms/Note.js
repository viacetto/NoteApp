import { ExpandableBox } from '../molecules/ExpandableBox/ExpandableBox'

import { Card } from "../atoms/Card/Card"
import { NoteForm } from "../molecules/NoteForm/NoteForm"
import { useState } from 'react'


export const Note = (props) => {
    const { title, description, _id } = props
    
    const [toggleNoteForm, setToggleNoteForm] = useState(false)
    const toggleEditHandle = () => setToggleNoteForm(!toggleNoteForm)
    return (
        <>
            {toggleNoteForm ? <NoteForm {...props} formType={'edit'} toggleEditHandle={toggleEditHandle}></NoteForm> :
                <Card {...props}>
                    <ExpandableBox toggleEditHandle={toggleEditHandle} _id={_id} title={title}
                        description={description}>
                    </ExpandableBox>
                </Card>
                }
        </>
    )
}