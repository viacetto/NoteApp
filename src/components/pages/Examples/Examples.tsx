import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Card } from "../../atoms/Card/Card"
import { FontHighlight } from "../../atoms/FontStyles/FontHighlight"
import { Fs } from "../../atoms/FontStyles/Hs"
import { Input } from "../../atoms/Input/Input"
import { BtnExample } from "../../molecules/examples/BtnExample"
import { PaletteSample } from "../../molecules/examples/PaletteSample"
import { Navbar } from "../../organisms/Navbar"
import { ExpandableBox } from '../../molecules/ExpandableBox/ExpandableBox'
import { NoteForm } from "../../molecules/NoteForm/NoteForm"
import { StyledContainer } from "../../organisms/styles"

export const Examples = () => {
    const theme: ThemeContext = useContext(ThemeContext)
    return (
        <>
            <Navbar />
            <Fs styling={3}>Styling Guide</Fs>
            <Fs styling={4}><FontHighlight>Form</FontHighlight></Fs>
            <NoteForm></NoteForm>
            <br></br>
            <Fs styling={4}><FontHighlight>Inputs</FontHighlight></Fs>
            <Input placeholder="Basic Input..."></Input>
            <br></br>
            <Fs styling={4}><FontHighlight>Expandable cards</FontHighlight></Fs>
            <Card>
                <ExpandableBox title={"The title of card"}
                    description={"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."}
                ></ExpandableBox>
            </Card>

            <br></br>
            <Fs styling={4}><FontHighlight>Typography</FontHighlight></Fs>
            <Fs styling={1}>Header 1</Fs>
            <Fs styling={2}>Header 2</Fs>
            <Fs styling={3}>Header 3</Fs>
            <Fs styling={4}>Header 4</Fs>
            <Fs styling={5}>Header 5</Fs>
            <br></br>

            <Fs styling={4}><FontHighlight>Color palette</FontHighlight></Fs>
            <StyledContainer>
                <div className="palette-sample-wrapper">
                    <PaletteSample background={theme.colors.primary[500]}>primary</PaletteSample>
                    <PaletteSample background={theme.colors.secondary[500]}>secondary</PaletteSample>
                    <PaletteSample background={theme.colors.special[300]}>special</PaletteSample>
                    <PaletteSample background={theme.colors.action[500]}>action</PaletteSample>
                    <PaletteSample background={theme.colors.info[500]}>info</PaletteSample>
                    <PaletteSample background={theme.colors.danger[500]}>danger</PaletteSample>
                    <PaletteSample background={theme.colors.add[500]}>add</PaletteSample>
                </div>
                <br></br>
                <Fs styling={4}><FontHighlight>Buttons</FontHighlight></Fs>
                <div className="sample-btn-wrapper">
                    <BtnExample type="add">add</BtnExample>
                    <BtnExample type="done">done</BtnExample>
                    <BtnExample type="clear">cancel</BtnExample>
                    <BtnExample type="unfold_more">expand</BtnExample>
                    <BtnExample type="unfold_less">collapse</BtnExample>
                    <BtnExample type="edit">edit</BtnExample>
                    <BtnExample type="delete">delete</BtnExample>
                </div>
                <br></br>
            </StyledContainer>
        </>

    )
}