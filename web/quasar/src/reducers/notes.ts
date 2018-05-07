import { actionTypes } from '../common/constants/actionTypes';
import { NoteEntity } from '../model';

export const notesReducer = (state: NoteEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES_COMPLETED:
      return handleFetchNotesCompleted(state, action.payload);
  }

  return state;
};

const handleFetchNotesCompleted = (state: NoteEntity[], payload: NoteEntity[]) => {
  return payload;
};
