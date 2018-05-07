import { NoteEntity } from '../../model';
import axios from 'axios';

const baseURL = 'http://localhost:7000/v1/auth/note';

const fetchNotes = (): Promise<NoteEntity[]> => {
  const membersURL = `${baseURL}/retrieve-all?user-id=2`;

  return axios.get(membersURL)
              .then((response) => (response.data))
              .then(mapToNotes);
};

const fetchNotesAsync = (): Promise<NoteEntity[]> => {
  const membersURL = `${baseURL}/retrieve-all?user-id=2`;

  return axios.get(membersURL)
  .then((response) => (response.data))
  .then(mapToNotes);
};

const mapToNotes = (notes: any[]): NoteEntity[] => {
  return notes.map(mapToNote);
};

const mapToNote = (note): NoteEntity => {
  return {
    id: note.id,
    user_id: note.user_id,
    tasks: note.tasks,
    title: note.title,
    content: note.content,
    category: note.category,
    status: note.status,
  };
};

const saveNote = (member: NoteEntity): Promise<any> => {
  let newNote:NoteEntity = member;
  newNote.user_id = 2;
  console.log(JSON.stringify(newNote, null, 4));
  return axios.post(`${baseURL}/create`, newNote)
              .then(res => {
                console.log(JSON.stringify(res));
                console.log(res.data);
              })
};

export const noteAPI = {
  fetchNotes,
  saveNote,
};
