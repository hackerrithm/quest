import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteFormValidation } from '../noteFormValidation';

//fetchNoteByIdAction

export const noteFieldChangeAction = (note: NoteEntity, fieldName: string, value: any) => (dispatch) => {
    console.log('here fire')
  noteFormValidation.validateField(note, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(noteFieldChangeCompleted(fieldValidationResult, value));
    });
};

export const noteContentFieldChangeAction = (note: NoteEntity, fieldName: string, value: any) => (dispatch) => {
  console.log('here fire')
noteFormValidation.validateField(note, fieldName, value)
  .then((fieldValidationResult) => {
    dispatch(noteContentFieldChangeCompleted(fieldValidationResult, value));
  });
};

export interface NoteFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

//UPDATE_CONTENT_NOTE_FIELD
const noteFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  type: actionTypes.UPDATE_NOTE_FIELD,
  payload: {
    fieldValidationResult,
    value,
  } as NoteFieldChangePayload,
});

const noteContentFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  type: actionTypes.UPDATE_CONTENT_NOTE_FIELD,
  payload: {
    fieldValidationResult,
    value,
  } as NoteFieldChangePayload,
});
