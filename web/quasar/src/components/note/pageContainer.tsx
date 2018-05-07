import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NoteEntity } from '../../model';
import { saveNoteAction } from './actions/saveNote';
import { NotePage } from './page';
import { noteFieldChangeAction } from './actions/notedFieldChange';

const mapStateToProps = (state: State, ownProps: any) => ({
  noteId: Number(ownProps.params.id) || 0,
  note: state.note,
  noteErrors: state.noteErrors,
});

const mapDispatchToProps = (dispatch) => ({
  //fetchNoteById: (id: number) => dispatch(fetchNoteByIdAction(id)),
  onChange: (note: NoteEntity, fieldName: string, value: string) =>
    dispatch(noteFieldChangeAction(note, fieldName, value)),
  onSave: (note: NoteEntity) => dispatch(saveNoteAction(note)),
});

export const NotePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotePage);
