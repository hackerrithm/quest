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
  updateNoteById(note: NoteEntity, id?: any)
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

  updateNoteById(note: NoteEntity, id: number):any {
    this.props.updateNoteById(note, id)
    return note;
  }

  public render() {
    return (
      <div className="container">
        <div className="row center-align">
          
        <Link to="/note"><a className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a></Link>
        
        </div>
        <div className="row">
          <div className="col s12 m3">
          </div>
          <div className="col s12 m6">
              {
                this.props.notes.map((note) =>
                  <NoteRow
                    key={note.ID}
                    note={note}
                    editNote={
                      () => {
                        this.updateNoteById(note, note.ID)
                      }
                    }
                    deleteNote={
                      () => {
                        event.preventDefault();
                        this.deleteNoteById(note.ID)}
                      }
                  />
                )
              }     
          </div>
          <div className="col s12 m3">
          </div>
        </div>
      </div>
    );
  }
};
