import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Category from './category';
import CategoryDetail from './category-detail';
import CategoryUpdate from './category-update';
import CategoryDeleteDialog from './category-delete-dialog';
import PrivateRoute from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

const Routes = ({ match }) => (
  <>
    <Switch>
      <PrivateRoute exact path={`${match.url}/new`} component={CategoryUpdate} hasAnyAuthorities={[AUTHORITIES.USER]} />
      <PrivateRoute exact path={`${match.url}/:id/edit`} component={CategoryUpdate} hasAnyAuthorities={[AUTHORITIES.USER]}/>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryDetail}/>
      <PrivateRoute path={match.url} component={Category}  hasAnyAuthorities={[AUTHORITIES.USER]}/>
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryDeleteDialog} />
  </>
);

export default Routes;
