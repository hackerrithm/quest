import { actionTypes } from '../common/constants/actionTypes';
import { NoteEntity } from '../model';
import { NoteFieldChangePayload } from '../components/note/actions/notedFieldChange';

const createEmptyNote = (): NoteEntity => ({
  ID: 23,
  userID: 2,
  tasks: [],
  title: '',
  content: '',
  category: '',
  status: '',
});

export const noteReducer = (state = createEmptyNote(), action) => {
  switch (action.type) {
    case actionTypes.UPDATE_NOTE_BY_ID_COMPLETED:
      return handleUpdateNoteByIdCompleted(state, action.payload);
    case actionTypes.DELETE_NOTES_BY_ID:
      return handleDeleteNoteByIdCompleted(state, action.payload);
    case actionTypes.FETCH_NOTES_BY_ID_COMPLETED:
      return handleFetchNoteByIdCompleted(state, action.payload);
    case actionTypes.UPDATE_NOTE_FIELD:
      return handleUpdateNoteField(state, action.payload);
    case actionTypes.UPDATE_CONTENT_NOTE_FIELD:
      return handleUpdateNoteContentField(state, action.payload);
  }

  return state;
};


const handleFetchNoteByIdCompleted = (state: NoteEntity, payload: NoteEntity): NoteEntity => {
  return payload;
};

const handleUpdateNoteField = (state: NoteEntity, payload: NoteFieldChangePayload): NoteEntity => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.value,
  };
};

const handleUpdateNoteContentField = (state: NoteEntity, payload: NoteFieldChangePayload): NoteEntity => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.value,
  };
};


const handleDeleteNoteByIdCompleted = (state: NoteEntity, payload: number): number => {
  return payload;
};

const handleUpdateNoteByIdCompleted = (state: NoteEntity, payload: NoteEntity): NoteEntity => {
  return payload;
};

