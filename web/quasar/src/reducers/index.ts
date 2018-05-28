import { combineReducers } from 'redux';
import { NoteEntity } from '../model';
import { notesReducer } from './notes';
import { noteReducer } from './note';
import { NoteErrors } from '../model/noteErrors';

export interface State {
  notes: NoteEntity[];
  note: NoteEntity;
  noteErrors: NoteErrors;
};

export const state = combineReducers<State>({
  notes: notesReducer,
  note: noteReducer,
});
