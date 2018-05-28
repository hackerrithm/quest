import * as React from 'react';
import { Link } from 'react-router';
import { NoteEntity } from '../../model';
import { Button } from '../../common/components/form';

interface Props {
  note: NoteEntity;
  deleteNote: (id: number) => void;
  editNote: (note: NoteEntity, id: number) => void;
}


export const NoteRow: React.StatelessComponent<Props> = ({ note, deleteNote, editNote }) => {

  

 return (
          <div className="">
            <div className="card horizontal hoverable">
              <div className="card-stacked">
                <h4 className="header center-align">        
                  <Link
                    to={`/note/${note.ID}`}
                  >
                    {note.title}
                  </Link>
                </h4>
                <div className="card-content">
                  <h5>{note.content}</h5>
                </div>
                <div className="card-action">
                    <Button
                      label="Delete"
                      className="btn-floating halfway-fab waves-effect waves-light red"
                      onClick={
                        //e.preventDefault();
                        deleteNote
                    }/>

                    <Button
                        label="Edit"
                        className="btn waves-effect waves-light teal"
                        onClick={
                          //e.preventDefault();
                          editNote
                      }
                    />
                </div>
              </div>
            </div>
            <br/>
            <br/>
          </div>
  );
};
