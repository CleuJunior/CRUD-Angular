import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public displayedColumns = ['name', 'category'];

  // public coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
