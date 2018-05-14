export class NoteEntity {
  ID: number;
  userID: number;
  tasks: Array<string>;
  title: string;
  content: string;
  category: string;
  status: string;
}

export interface TaskEntity {
  id: number;
  noteid: number;
  content: string;
}
