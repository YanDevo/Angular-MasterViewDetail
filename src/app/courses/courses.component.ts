import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';


const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Web Dev Essentials',
      description: 'Learn the fundamentals of Web Development Now!',
      percentComplete: 26,
      favorite: true
    }
  ];


  selectedCourse = emptyCourse;

  constructor() { }

  ngOnInit(): void {
  }


  selectCourse(course) {
    this.selectedCourse = course;
  }

  clear() {
    this.selectCourse({...emptyCourse})
  }
}
