import { FormValidationResult, FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../common/constants/actionTypes';
import { NoteErrors } from '../model';
import { NoteFieldChangePayload } from '../components/note/actions/notedFieldChange';

const createEmptyNoteErrors = (): NoteErrors => ({
  title: new FieldValidationResult(),
  content: new FieldValidationResult(),
});

export const noteErrorsReducer = (state = createEmptyNoteErrors(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES_COMPLETED:
      return handleFetchNotesCompleted(state, action.payload);
    case actionTypes.UPDATE_NOTE_FIELD:
      return handleUpdateNoteField(state, action.payload);
    case actionTypes.SAVE_NOTE:
      return handleSaveNote(state, action.payload);
  }

  return state;
};

const handleFetchNotesCompleted = (state: NoteErrors, payload) => {
  return createEmptyNoteErrors();
};

const handleUpdateNoteField = (state: NoteErrors, payload: NoteFieldChangePayload): NoteErrors => {
  return {
    ...state,
    [payload.fieldValidationResult.key]: payload.fieldValidationResult,
  };
};

const handleSaveNote = (state: NoteErrors, payload: FormValidationResult): NoteErrors => {
  const newNoteErrors = { ...state };

  return payload.fieldErrors.reduce((noteErrors, fieldValidationResult) => {
    noteErrors[fieldValidationResult.key] = fieldValidationResult;
    return noteErrors;
  }, newNoteErrors);
};
