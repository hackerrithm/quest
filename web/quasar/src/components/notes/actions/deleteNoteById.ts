// import { actionTypes } from '../../../common/constants/actionTypes';
// import { NoteEntity } from '../../../model';
// import { noteAPI } from '../../../api/note';

// export const deleteNoteByIdAction = (id: number) => (dispatch) => {
//   noteAPI.deleteNote(id)
//     .then((note) => {
//       dispatch(deleteNoteByIdCompleted(note));
//     });
// };

// const deleteNoteByIdCompleted = (note: NoteEntity) => ({
//   type: actionTypes.DELETE_NOTES_BY_ID,
//   payload: note,
// });
