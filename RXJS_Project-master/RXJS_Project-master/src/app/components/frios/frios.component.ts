import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-frios',
  templateUrl: './frios.component.html',
  styleUrls: ['./frios.component.css']
})
export class FriosComponent
{
  data$!: Observable<Post>;

  constructor(private http: HttpClient)
  {
    this.load();
  }

  private load()
  {
    this.data$ = this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
  }
}

interface Post
{
  userId: number;
  id: number;
  title: string;
  body:string;
}
