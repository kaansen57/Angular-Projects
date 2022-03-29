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
    this.activeRouter.params.subscribe((param) => {
      if (param['id']) {
        const id = param['id'];
        this.noteService.notes.forEach((note) => {
          if (note.id == id) {
            this.noteDetail = note;
          }
        });
      }
    });
  }
}
