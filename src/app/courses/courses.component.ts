import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';


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

  courses = [];
  currentCourse = emptyCourse;
  originalTitle:string = '';

// _____________________________________________________





  constructor(private coursesDataService: CoursesService) { }



// _____________________________________________________
  


  
  ngOnInit(): void {
    this.fetchCourses();
  }



// __________________________________________________



  selectCourse(course) {
    this.currentCourse = {...course};
    this.originalTitle = course.title;
  }

  fetchCourses() {
    this.coursesDataService.getCourses()
      .subscribe(result => this.courses = result)
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  updateCourse(course) {
    this.coursesDataService.update(course)
      .subscribe(result => this.fetchCourses())
  }

  createCourse(course){
    this.coursesDataService.create(course)
      .subscribe(result => this.fetchCourses())
  }

  deleteCourse(courseId){
    this.coursesDataService.deleteCourse(courseId)
      .subscribe(result => this.fetchCourses())
  }


  clear() {
    this.selectCourse({...emptyCourse})
  }
}
