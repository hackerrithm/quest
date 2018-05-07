import { actionTypes } from '../common/constants/actionTypes';
import { NoteEntity } from '../model';
import { NoteFieldChangePayload } from '../components/note/actions/notedFieldChange';

const createEmptyNote = (): NoteEntity => ({
  id: 23,
  user_id: 2,
  tasks: [],
  title: '',
  content: '',
  category: '',
  status: '',
});

export const noteReducer = (state = createEmptyNote(), action) => {
  switch (action.type) {
    // case actionTypes.FETCH_MEMBER_BY_ID_COMPLETED:
    //   return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.UPDATE_NOTE_FIELD:
      return handleUpdateNoteField(state, action.payload);
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
