import * as React from 'react';
import { Link } from 'react-router';
import { NoteEntity } from '../../model';
import { NoteRow } from "./noteRow";
import { NoteHeader } from "./noteHeader";
import { Footer } from "../footer";
import { Button } from '../../common/components/form';

interface Props {
  notes: NoteEntity[];
  fetchNotes(): void;
  deleteNoteById(id?: any): any;
}

export class NotesPage extends React.Component<Props,{}> {

  public componentDidMount() {
    this.props.fetchNotes();
  }
  constructor() {
    super();

   this.deleteNoteById = this.deleteNoteById.bind(this);
  }

  deleteNoteById(id: number):any {
    this.props.deleteNoteById(id)
    return id;
  }

  public render() {
    return (
      <div className="container">
        <div className="row center-align">
          
        <Link to="/note"><a className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a></Link>
        
        </div>
        <div className="col s12 m4">
        </div>
        <div className="col s12 m8">
            {
              this.props.notes.map((note) =>
                <NoteRow
                  key={note.ID}
                  note={note}
                  deleteNote={
                    () => {
                      event.preventDefault();
                      this.deleteNoteById(note.ID)}
                    }
                />
              )
            }     
        </div>
        <div className="col s12 m2">
        </div>
      </div>
    );
  }
};
