import * as React from 'react';
import { Link } from 'react-router';
import { NoteEntity } from '../../model';
import { NoteRow } from "./noteRow";
import { NoteHeader } from "./noteHeader";
import { Footer } from "../footer";

interface Props {
  notes: NoteEntity[];
  fetchNotes(): void;
}

export class NotesPage extends React.Component<Props,{}> {
  public componentDidMount() {
    this.props.fetchNotes();
  }

  public render() {
    return (
      <div className="row">
        <h2> Notes Page</h2>
        <Link to="/note">New Note</Link>
        <table className="highlight highlight">
          <thead>
            <NoteHeader />
          </thead>
          <tbody>
            {
              this.props.notes.map((note) =>
                <NoteRow
                  key={note.id}
                  note={note}
                />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};
