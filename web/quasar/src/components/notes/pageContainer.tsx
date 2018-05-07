import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NotesPage } from './page';
import { fetchNotesAction } from './actions/fetchNotes';

const mapStateToProps = (state: State) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotesAction()),
});

export const NotesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesPage);
