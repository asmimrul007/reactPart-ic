export const NoteReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TITLE": {
      return {
        ...state,
        noteTitle: action.payload.title,
      };
    }
    case "CREATE_NOTE": {
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        isComplete: false,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
        noteTitle: "",
      };
    }
    case "EDIT_NOTE": {
      const toBeEditedNote = state.notes.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        noteTitle: action.payload.title,
        editMode: true,
        editableNotes: toBeEditedNote,
        noteTitle: toBeEditedNote.title,
      };
    }
    case "UPDATE_NOTE": {
      return {
        ...state,
        notes: state.notes.map((item) => {
          if (item.id === state.editableNotes.id) {
            item.title = action.payload.title;
          }
          return item;
        }),
        editMode: false,
        editableNotes: null,
        noteTitle: "",
      };
    }
    case "REMOVE_NOTE": {
      const newNotes = state.notes.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        notes: newNotes,
        noteTitle: "",
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
