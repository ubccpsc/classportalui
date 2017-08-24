import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import * as auth from './auth';
import { history, store } from './store';
import Layout from './components/Layout/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostLoginPage from './pages/postlogin';
import AdminPage from './pages/adminportal';
import StudentPage from './pages/studentportal';
import SuperAdminPage from './pages/superadminportal';
import ClassListTable from './components/ClassList/ClassListTable';
import AdminListTable from './components/Admin/AdminListTable';
import LabListTable from './components/LabList/LabListTable';
import DeliverableListTable from './components/Deliverable/DeliverableListTable';
import TeamListTable from './components/Team/TeamListTable';
import CourseSettingsListTable from './components/CourseSettings/CourseSettingsListTable';
import ErrorPage from './pages/error';
import App from './App';
import CourseList from './components/Course/CourseList';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} onEnter={auth.checkAuthenticated, auth.requireAuthentication}/>
        <Route path="usersExample" component={ClassListTable}>
          <Route path="/usersExample/:id" component={ClassListTable}/>
        </Route>
        <Route path="login" component={LoginPage} onEnter={auth.checkUnauthenticated}/>
        <Route path="/superadmin" component={SuperAdminPage}>
          <Route path="/superadmin/courses" component={CourseList}/>
          <Route path="/superadmin/:courses/students" component={ClassListTable} />
          <Route path="/superadmin/:courses/deliverables" component={DeliverableListTable}/>
          <Route path="/superadmin/:courses/settings" component={CourseSettingsListTable}/>
          <Route path="/superadmin/labs" component={CourseList}/>
          <Route path="/superadmin/:courses/labs" component={LabListTable}/>
          <Route path="/superadmin/:courses/teams" component={TeamListTable}/>
          <Route path="/superadmin/students" component={ClassListTable} />
        </Route>
        <Route path="students" component={StudentPage}>
          <Route path="/students/courses" component={CourseList}/>
          <Route path="/students/:courses/deliverables" component={DeliverableListTable}/>
          <Route path="/students/:courses/teams" component={TeamListTable}/>
        </Route>
        <Route path="postLogin" component={PostLoginPage} onEnter={auth.requireAuthentication, auth.checkUnauthenticated}/>
        <Route path="*" component={ErrorPage}/>
      </Route>
    </Router>
  </Provider>
);