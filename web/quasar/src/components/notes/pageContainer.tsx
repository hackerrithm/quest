import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NotesPage } from './page';
import { fetchNotesAction } from './actions/fetchNotes';
import { deleteNoteByIdAction } from '../note/actions/deleteNoteById';
import { NoteEntity } from '../../model/noteEntity';
import { updateNoteByIdAction } from '../note/actions/updateNoteById';


const mapStateToProps = (state: State) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotesAction()),
  updateNoteById: (note: NoteEntity, id: number) => dispatch(updateNoteByIdAction(note, id)),
  deleteNoteById: (id: number) => dispatch(deleteNoteByIdAction(id)),
});

export const NotesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesPage);
