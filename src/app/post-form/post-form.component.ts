import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title:string = '';
  text:string = '';

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('inputBlur') inputRef!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  createPost () {
    const newPost:Post = {
      title: this.title,
      text: this.text
    }
    this.onAdd.emit(newPost);
    this.title = '';
    this.text = '';
  }
  focusTitle () {
    this.inputRef.nativeElement.focus();
  }

}
