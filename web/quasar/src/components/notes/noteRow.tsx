import * as React from 'react';
import { Link } from 'react-router';
import { NoteEntity } from '../../model';

interface Props {
  note: NoteEntity;
}

export const NoteRow: React.StatelessComponent<Props> = ({ note }) => {
  return (
    <tr>
      <td>
        <span>{note.title}</span>
      </td>
      <td>
        <span>{note.content}</span>
      </td>
    </tr>
  );
};
