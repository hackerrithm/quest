import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors, NoteEntity } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorsReducer } from './memberErrors';
import { notesReducer } from './notes';
import { noteReducer } from './note';
import { NoteErrors } from '../model/noteErrors';

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
  notes: NoteEntity[];
  note: NoteEntity;
  noteErrors: NoteErrors;
};

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorsReducer,
  notes: notesReducer,
  note: noteReducer,
});
