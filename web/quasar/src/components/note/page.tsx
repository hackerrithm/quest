import * as React from 'react';
import { NoteEntity } from '../../model';
import { NoteForm } from './noteForm';
import { NoteErrors } from '../../model/noteErrors';

interface Props {
  noteId: number;
  note: NoteEntity;
  noteErrors: NoteErrors;
  fetchNoteById: (id: number) => void;
  onChange: (note: NoteEntity, fieldName: string, value: string) => void;
  onSave: (note: NoteEntity) => void;
  onUpdate: (note: NoteEntity) => void;
}

export class NotePage extends React.Component<Props, {}> {
  constructor() {
    super();

    // this.setState(this.props.note)
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    let x = this.props.fetchNoteById(this.props.noteId);
    console.log(x,  " note ID")
  }

  private onChange(fieldName: string, value: string) {
    console.log('changed')
    this.props.onChange(this.props.note, fieldName, value);
  }

  private onSave() {
    //this.props.note.userID = 2
    console.log(this.props.note.ID + " this.props.note.ID")
    if (this.props.note.ID != null) {
      console.log("present note")
    } else {
      
    }
    this.props.onSave(this.props.note);
  }

  render() {
    return (
      <NoteForm
        note={this.props.note}
        noteErrors={this.props.noteErrors}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}
