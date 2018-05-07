import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteAPI } from '../../../api/note';

export const fetchNotesAction = () => (dispatch) => {
  noteAPI.fetchNotes()
    .then((notes) => {
      dispatch(fetchNotesCompleted(notes));
    });
};

const fetchNotesCompleted = (notes: NoteEntity[]) => ({
  type: actionTypes.FETCH_NOTES_COMPLETED,
  payload: notes,
});
