import * as React from 'react';
import { NoteEntity } from '../../model/noteEntity';
import { Input, Button } from '../../common/components/form';
import { NoteErrors } from '../../model/noteErrors';

interface Props {
  note: NoteEntity;
  noteErrors: NoteErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const NoteForm: React.StatelessComponent<Props> = (props) => {
  return (
    <form>
      <h1>Manage note</h1>

      <Input
        name="title"
        label="Title"
        value={props.note.title}
        onChange={props.onChange}
        // error={
        //   !props.noteErrors.title.succeeded ?
        //     '' :
        //     props.noteErrors.title.errorMessage
        // }
      />

      <Input
        name="content"
        label="Content"
        value={props.note.content}
        onChange={props.onChange}
      />

      <Button
        label="Save"
        className="btn blue lighten-1"
        onClick={props.onSave}
      />
    </form>
  );
};
