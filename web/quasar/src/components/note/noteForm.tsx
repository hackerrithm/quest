import * as React from 'react';
import { NoteEntity } from '../../model/noteEntity';
import { Input, Button } from '../../common/components/form';
import { NoteErrors } from '../../model/noteErrors';

interface Props {
  note: NoteEntity;
  noteErrors: NoteErrors;
  onChange: (fieldName: string, value: string) => void;
  //onChangeContent: (ieldName: string, value: string) => void;
  onSave: () => void;
}

export const NoteForm: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col s12 m2">
            </div>
            <div className="col s12 m8">
                <form>
                    <div id="login-page" className="row center">
                        <div className="col s12 z-depth-6 card-panel hoverable">
                            <div className="row">
                                <div className="input-field col s12 center">
                                    {/* <img src="/public/images/titan.jpg" width="40" height="40" alt="" id="logo" className="responsive-img valign profile-image-login" /> */}
                                    <h4 className="center login-form-text">Note</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    {/* <i className="material-icons prefix">account_circle</i> */}
                                    
                                            <Input
                                              name="title"
                                              value={props.note.title}
                                              onChange={props.onChange}
                                              placeholder="Title"
                                            // error={
                                            //   !props.noteErrors.title.succeeded ?
                                            //     '' :
                                            //     props.noteErrors.title.errorMessage
                                            // }
                                            />
                                </div>

                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    {/* <i className="material-icons prefix">lock</i> */}
                                    <Input
                                      name="content"
                                      value={props.note.content}
                                      onChange={props.onChange}
                                      placeholder="Content"
                                    />
                                </div>
                                </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12  login-text">
                                
                                  <Input
                                    name="status"
                                    value={props.note.status}
                                    onChange={props.onChange}
                                    placeholder="Status"
                                  />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                  <Button
                                    label="Save"
                                    className="btn blue lighten-1"
                                    onClick={props.onSave}
                                  />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col s12 m2">
                
            </div>
        </div>
    </div> 
    // <form>
    //   <h1>Manage note</h1>

    //   <Input
    //     name="title"
    //     label="Title"
    //     value={props.note.title}
    //     onChange={props.onChange}
    //   // error={
    //   //   !props.noteErrors.title.succeeded ?
    //   //     '' :
    //   //     props.noteErrors.title.errorMessage
    //   // }
    //   />

    //   <Input
    //     name="content"
    //     label="Content"
    //     value={props.note.content}
    //     onChange={props.onChange}
    //   />



    //   <Input
    //     name="status"
    //     label="Status"
    //     value={props.note.status}
    //     onChange={props.onChange}
    //   />

    //   <Button
    //     label="Save"
    //     className="btn blue lighten-1"
    //     onClick={props.onSave}
    //   />
    // </form>
  );
};
