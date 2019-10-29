import { Component, OnInit } from '@angular/core';
import { CourseListModule } from '../course-list.module';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseItems: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourses();
  }
}
