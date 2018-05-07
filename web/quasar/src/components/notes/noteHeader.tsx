import * as React from 'react';

export const NoteHeader: React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <th>Title</th>
      <th>Content</th>
    </tr>
  );
};
