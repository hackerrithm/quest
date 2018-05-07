export interface NoteEntity {
  id: number;
  user_id: number;
  tasks: Array<string>;
  title: string;
  content: string;
  category: string;
  status: string;
}

export interface TaskEntity {
  id: number;
  note_id: number;
  content: string;
}
