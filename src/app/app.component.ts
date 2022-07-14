import {Component, OnInit} from '@angular/core';
export interface Post {
  title: string,
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number: number = 3.56345;
  str:string = 'hello world';
  date:Date = new Date();

  search = '';
  searchTitle = 'title'

  post:Post[] = [
    {title: 'Bear', text: 'Some text 1'},
    {title: 'Apple', text: 'Some text 2'},
    {title: 'Orange', text: 'Some text 3'},
  ]

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 3000)
  })

  addPost () {
    this.post.unshift({
      title: 'Angular 14',
      text: 'Right now!'
    })
  }
  constructor() {
  console.log(this.searchTitle);
  }

}
