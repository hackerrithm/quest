import axios from 'axios';
import { NoteEntity } from '../../model';

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
    ID: note.ID,
    userID: note.user_id,
    tasks: note.tasks,
    title: note.title,
    content: note.content,
    category: note.category,
    status: note.status,
  };
};

const saveNote = (note: NoteEntity): Promise<any> => {
  return axios.post(`${baseURL}/create`, note)
              .then(res => {
                console.log(JSON.stringify(res.data));
                console.log(res.data);
              })
};

const fetchNoteById = (id: number): Promise<any> => {
  return axios.get(`${baseURL}/${id}/retrieve?user-id=2`)
              .then(res => {
                const persons = res.data as NoteEntity;
                console.log("persons::: ", persons.category)
                return persons.ID
              })
}

const deleteNote  = (id: number): Promise<any> => {
  return axios.delete(`${baseURL}/${id}/remove?user-id=2`)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
}


export const noteAPI = {
  fetchNotes,
  saveNote,
  fetchNoteById,
  deleteNote
};
