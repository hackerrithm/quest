import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { hashHistory } from 'react-router';
import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteAPI } from '../../../api/note';
import { noteFormValidation } from '../noteFormValidation';

export const saveNoteAction = (note: NoteEntity) => (dispatch) => {
  noteFormValidation.validateForm(note)
    .then((formValidationResult) => {
      if (formValidationResult.succeeded) {
        saveNote(note);
      }
      dispatch(saveNoteActionCompleted(formValidationResult));
    });
};

const saveNote = (note: NoteEntity) => {
  noteAPI.saveNote(note)
    .then(() => {
      toastr.success('Note saved.');
      hashHistory.goBack();
    })
    .catch(toastr.error);
};

const saveNoteActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_NOTE,
  payload: formValidationResult,
});
