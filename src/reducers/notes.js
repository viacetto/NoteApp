import { useSelector } from "react-redux";
export const selectNotes  = (state) => state.notes
export const notes = (
    state = [
        {
            title: "study programming",
            description: "read the book Introduction To React",
            _id: 0
        },
        {
            title: "go to gym",
            description: "do cardio",
            _id: 1
        },
        {
            title: "learn spanish",
            description: "finish chapter of spanish with duolingo",
            _id: 2
        }
    ],
    action
) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description,
                    _id: action._id
                }
            ];
        case "EDIT_NOTE":
            return state.map((note) =>
                note._id === action._id ? {
                    ...note, title: action.title,
                    description: action.description,
                } : note
            );
        case "DELETE_NOTE":
            return state.filter((note) =>
                note._id !== action._id
            );
        default:
            return state;
    }
};
