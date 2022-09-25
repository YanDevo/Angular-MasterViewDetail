import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 37,
      favorite: true
    },
    {
      id: '2',
      title: 'Web Dev Essentials',
      description: 'Learn the fundamentals of Web Development Now!',
      percentComplete: 88,
      favorite: true
    },
    {
      id: '3',
      title: 'Angular Services',
      description: 'Learn the fundamentals of Services & Dependency Injection!',
      percentComplete: 88,
      favorite: true
    }
  ]

}
