import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {Post} from '../app.component';
import {User} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit , OnDestroy{

  @Input() currentPost!: Post;
  @Input() currentUser!: User;

  @Input() length!: number;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef!: ElementRef


  @ViewChild("selectedTitle", {static: true}) selectedTitle!:ElementRef

  constructor() {
  }

  removePost1 () {
    this.onRemove.emit(this.currentPost.id);
  }
  ngOnInit(): void {
    console.log(this.infoRef)
  }

  ngOnDestroy(): void {

  }

  selectTitle () {
    console.log(this.selectedTitle.nativeElement);
    this.selectedTitle.nativeElement.focus();
  }

}
