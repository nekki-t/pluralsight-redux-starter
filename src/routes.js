import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components';
import HomePage from './components/Home';
import AboutPage from './components/About';
import CoursesPage from './components/Course';
import ManageCoursePage from './components/Course/ManageCoursePage';//eslint-disable-line import/no-named-as-default



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
