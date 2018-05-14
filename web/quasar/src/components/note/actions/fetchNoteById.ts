import { actionTypes } from '../../../common/constants/actionTypes';
import { NoteEntity } from '../../../model';
import { noteAPI } from '../../../api/note';

export const fetchNoteByIdActionfetchNoteByIdAction = (id: number) => (dispatch) => {
  noteAPI.fetchNoteById(id)
    .then((note) => {
      dispatch(fetchNoteByIdCompleted(note));
    });
};

//deleteNoteByIdAction

// export const deleteNoteByIdAction = (id: number) => (dispatch) => {
//   noteAPI.deleteNote(id)
//     .then((note) => {
//       dispatch(deleteNoteByIdCompleted(note));
//     });
// };

const fetchNoteByIdCompleted = (note: NoteEntity) => ({
  type: actionTypes.FETCH_NOTES_BY_ID_COMPLETED,
  payload: note,
});

// const deleteNoteByIdCompleted = (note: NoteEntity) => ({
//   type: actionTypes.DELETE_NOTES_BY_ID,
//   payload: note,
// });
