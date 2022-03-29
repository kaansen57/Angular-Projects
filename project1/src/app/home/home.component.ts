import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Note from '../models/note';
import { NoteService } from '../note/note.service';

declare let alertify: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
  }

  errorAlert() {}
  deleteNote(id: number): void {
    alertify.confirm(
      'Delete Notice !',
      'The note will be deleted, are you sure ? ',
      () => {
        this.noteService.deleteNote(id);
        this.notes = this.noteService.getAll();
        alertify.error('Note Deleted!');
      },
      () => {}
    );
  }
}
