import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import {AuthProvider} from '../context/AuthContext';

import SignIn from '..//pages/SignIn';
import SignUp from '..//pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp}  />
        <Route path="/forgot-password" component={ForgotPassword} />

        <AuthProvider>
          <Route path="/landing" component={Landing} />
          <Route path="/study" component={TeacherList} />
          <Route path="/give-classes" component={TeacherForm} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;