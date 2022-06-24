import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];
  public displayedColumns = ['name', 'category'];

  public coursesService: CoursesService;

  constructor(private httpClient: HttpClient) {
    this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
