import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Note from '../models/note';
import { NoteService } from '../note/note.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  noteDetail: Note = { id: 0, title: '', detail: '' };

  constructor(private activeRouter: ActivatedRoute,private noteService:NoteService) {}

  ngOnInit(): void {
    this.noteService.notes.forEach((note) => {
      const id = this.activeRouter.snapshot.params['id'];
      if (note.id == id) {
        this.noteDetail = note;
      }
    });
  }
}
