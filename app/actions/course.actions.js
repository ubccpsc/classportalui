import CourseApi from '../api/course.api';
import * as types from './types.helper';

// gets a list of all users in the database
export function getAllCourses() {
  return {
    type: types.GET_ALL_COURSES,
    payload: CourseApi.getAllCourses(),
  }
}

// gets a single course with its details
export function getCourseDetails(courseNum) {
    return {
        type: types.GET_COURSE_DETAILS,
        payload: CourseApi.getCourseDetails(courseNum),
    }
}