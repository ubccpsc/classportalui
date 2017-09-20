import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class TeamApi {
  static getCourseTeams(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/error/teams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeams(courseNum) ERROR from API: ${err}`);
      });
  }

  static getCourseTeamsPerSection(courseNum, sectionNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/students`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerSection() ERROR from API: ${err}`);
      });
  }

  static isStudentInSameLab(courseNum, username) {
    const AUTHENTICATED_POST = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({username}),
    }

    console.log('stringify', JSON.stringify({username: username}));
    return fetch(`${config.apiAddress}/${courseNum}/students/isInClass`, AUTHENTICATED_POST)
      .then(students => {
        alert('log ' + courseNum + ' ' + username);
        return students.json();
      })
      .catch(err => {
        console.log(`student.api::getAllStudents() ERROR: No response from API: ${err}`);
      });
  }

  static createCustomTeam(courseNum, usernames) {
    const AUTHENTICATED_PUT = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'put',
      mode: 'cors',
      body: JSON.stringify({
        members: usernames,
        markInBatch: true
      }),
    }

    console.log('stringify', JSON.stringify({members: usernames}));
    return fetch(`${config.apiAddress}/${courseNum}/admin/customTeam`, AUTHENTICATED_PUT)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`team.api::getAllStudents() ERROR: No response from API: ${err}`);
      });
  }

  static getCourseTeamsPerUser(courseNum, mongoUserId) {
    return fetch(`${config.apiAddress}/${courseNum}/${mongoUserId}/teams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerUser() ERROR from API: ${err}`);
      });
  }

  static getMyTeamsPerCourse(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/myTeams`, options.AUTHENTICATED)
      .then(teams => {
        return teams.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerCourse() ERROR from API: ${err}`);
      });
  }

  static getStudentsWithoutTeam(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/students/withoutTeam`, options.AUTHENTICATED)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`team.api::getCourseTeamsPerUser() ERROR from API: ${err}`);
      });
  }
}


export default TeamApi;