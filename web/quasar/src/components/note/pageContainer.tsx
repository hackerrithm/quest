import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NoteEntity } from '../../model';
import { saveNoteAction } from './actions/saveNote';
import { NotePage } from './page';
import { noteFieldChangeAction, noteContentFieldChangeAction } from './actions/notedFieldChange';
import { fetchNoteByIdActionfetchNoteByIdAction} from './actions/fetchNoteById';
import { updateNoteByIdAction } from './actions/updateNoteById';

const mapStateToProps = (state: State, ownProps: any) => ({
  noteId: Number(ownProps.params.id) || 0,
  note: state.note,
  noteErrors: state.noteErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNoteById: (id: number) => dispatch(fetchNoteByIdActionfetchNoteByIdAction(id)),
  updateNoteById: (note: NoteEntity, id: number) => dispatch(updateNoteByIdAction(note, id)),
  onChange: (note: NoteEntity, fieldName: string, value: string) => {
    dispatch(noteFieldChangeAction(note, fieldName, value))
    dispatch(noteContentFieldChangeAction(note, fieldName, value))
  },
  onSave: (note: NoteEntity) => dispatch(saveNoteAction(note)),
});

export const NotePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotePage);
