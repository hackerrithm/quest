import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteFormValidation } from '../noteFormValidation';

export const noteFieldChangeAction = (note: NoteEntity, fieldName: string, value: any) => (dispatch) => {
    console.log('here fire')
  noteFormValidation.validateField(note, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(noteFieldChangeCompleted(fieldValidationResult, value));
    });
};

export interface NoteFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

const noteFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  type: actionTypes.UPDATE_NOTE_FIELD,
  payload: {
    fieldValidationResult,
    value,
  } as NoteFieldChangePayload,
});
