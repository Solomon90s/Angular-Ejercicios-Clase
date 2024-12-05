import { Component } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent
{
    mySubject = new Subject<String>();
    lista= ['Batman', 'Thor', 'Ironman', 'Tormenta'];
    protected readonly Math = Math;
}
