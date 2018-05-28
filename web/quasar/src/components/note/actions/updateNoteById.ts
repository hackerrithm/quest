import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteAPI } from '../../../api/note';

export const updateNoteByIdAction = (note: NoteEntity, id: number) => (dispatch) => {
  noteAPI.updateNote(note, id)
    .then((note) => {
      dispatch(updateNoteByIdCompleted(note));
    });
};

const updateNoteByIdCompleted = (note: NoteEntity) => ({
  type: actionTypes.UPDATE_CONTENT_NOTE_FIELD,
  payload: note,
});
