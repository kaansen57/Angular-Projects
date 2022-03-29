import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Note from '../models/note';
import { NoteService } from './note.service';
declare let alertify: any;

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  btn: any = { text: 'Save', type: 'add' };
  note: Note = { id: 0, title: '', detail: '' };

  // noteForm = this.formBuilder.group({
  //   id: 0,
  //   title: '',
  //   detail: '',
  // });

  constructor(
    private activeRouter: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}

  noteAdd() {
    if (this.note.title != '' && this.note.detail != '') {
      if (this.btn.type === 'add') {
        const lastItemIndex = this.noteService.getAll().length;
        this.note.id =
          lastItemIndex > 0
            ? this.noteService.getAll()[lastItemIndex - 1].id + 1
            : 1;
        this.noteService.noteAdd(this.note);
        this.router.navigate(['/']);
      } else if (this.btn.type === 'edit') {
        this.noteService.noteEdit(this.note);
        this.router.navigate(['/']);
      }
    } else {
      alertify.error('Please fill empty areas !')
    }
  }

  noteEdit() {
    this.btn.text = 'Edit Note';
    this.btn.type = 'edit';
  }
  ngOnInit(): void {
    // this.noteForm = new FormGroup({
    //   // id: new FormControl(this.note.id, [Validators.required]),
    //   title: new FormControl(this.note.title, [
    //     Validators.required,
    //     Validators.minLength(2),
    //   ]),
    //   detail: new FormControl(this.note.detail, [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    // });

    this.activeRouter.params.subscribe((param) => {
      if (param['id']) {
        this.noteEdit();
        const id = param['id'];
        this.noteService.notes.forEach((note) => {
          if (note.id == id) {
            this.note = note;
          }
        });
      }
    });
  }

  // get getTitle() {
  //   return this.noteForm.get('title');
  // }
  // get getDetail() {
  //   return this.noteForm.get('detail');
  // }
}
