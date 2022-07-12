import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

export interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2}
  ];
  users: User[] = [
    {name: 'Yana', age: 34},
    {name: 'Ivan', age: 35},
    {name: 'Sofia', age: 6},
  ]
   ngOnInit() {
    
   }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost (id: number) {
    this.posts = this.posts.filter(item => item.id !== id)
  }
}
