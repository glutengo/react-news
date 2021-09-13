import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Post from './post';
import PostDetail from './post-detail';
import PostUpdate from './post-update';
import PostDeleteDialog from './post-delete-dialog';
import PrivateRoute from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

const Routes = ({ match }) => (
  <>
    <Switch>
      <PrivateRoute exact path={`${match.url}/new`} component={PostUpdate} hasAnyAuthorities={[AUTHORITIES.USER]}/>
      <PrivateRoute exact path={`${match.url}/:id/edit`} component={PostUpdate} hasAnyAuthorities={[AUTHORITIES.USER]}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostDetail} />
      <PrivateRoute path={match.url} component={Post} hasAnyAuthorities={[AUTHORITIES.USER]}/>
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostDeleteDialog} />
  </>
);

export default Routes;
