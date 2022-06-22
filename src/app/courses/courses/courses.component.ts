import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'Java', category: 'Back-end'}
  ];
  public displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
