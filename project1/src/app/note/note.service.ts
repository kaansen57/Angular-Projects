import { Injectable } from '@angular/core';
import Note from '../models/note';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    { id: 1, title: 'note1', detail: 'note1 detail' },
    // { id: 2, title: 'note2', detail: 'note2 detail' },
    // { id: 3, title: 'note3', detail: 'note3 detail' },
    // { id: 4, title: 'note4', detail: 'note4 detail' },
  ];
  constructor(private localStorage: LocalStorageService) {
    this.notes =
      localStorage.getItem('notes').length > 0
        ? localStorage.getItem('notes')
        : [];
  }

  noteAdd(note: Note): void {
    this.notes.push(note);
    this.localStorage.setItem('notes', this.notes);
  }

  noteEdit(note: Note) {
    const index = this.notes.findIndex((notes) => notes.id == note.id);
    this.notes[index] = { id: note.id, title: note.title, detail: note.detail };
    this.localStorage.setItem('notes', this.notes);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.localStorage.setItem('notes', this.notes);
  }

  getAll(): Note[] {
    return this.notes.length > 0 ? this.notes : [];
  }
}
