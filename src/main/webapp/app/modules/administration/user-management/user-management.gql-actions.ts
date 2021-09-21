import { client } from 'app/config/apollo-client';
import {
  CreateUserDocument,
  DeleteUserDocument,
  GetAuthoritiesDocument,
  GetUserDocument,
  GetUsersDocument,
  UpdateUserDocument,
} from 'app/entities/user/user.gql';
import { IUser } from 'app/shared/model/user.model';
import { ICrudDeleteAction, ICrudPutAction } from 'react-jhipster';
import { ACTION_TYPES } from './user-management.reducer';

export const getUsersAsAdmin = (page?, size?, sort?, bypassCache?) => {
  const payload = client
    .query({ query: GetUsersDocument, variables: { page, size, sort }, fetchPolicy: bypassCache ? 'no-cache' : 'cache-first' })
    .then(res => ({ data: res.data.result.edges.map(e => e.node), headers: { 'x-total-count': res.data.result.totalCount } }));
  return {
    type: ACTION_TYPES.FETCH_USERS_AS_ADMIN,
    payload,
  };
};

export const getUsers = getUsersAsAdmin;

export const getUser = login => {
  const payload = client.query({ query: GetUserDocument, variables: { login } }).then(res => ({ data: res.data.result }));
  return {
    type: ACTION_TYPES.FETCH_USER,
    payload,
  };
};

export const createUser: ICrudPutAction<IUser> = user => async dispatch => {
  const payload = client.mutate({ mutation: CreateUserDocument, variables: { user } });
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_USER,
    payload,
  });
  dispatch(getUsersAsAdmin());
  return result;
};

export const updateUser: ICrudPutAction<IUser> = user => async dispatch => {
  const payload = client.mutate({ mutation: UpdateUserDocument, variables: { user } });
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_USER,
    payload,
  });
  dispatch(getUsersAsAdmin());
  return result;
};

export const deleteUser: ICrudDeleteAction<IUser> = login => async dispatch => {
  const payload = client.mutate({ mutation: DeleteUserDocument, variables: { login } });
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_USER,
    payload,
  });
  dispatch(getUsersAsAdmin());
  return result;
};

export const getRoles = () => {
  const payload = client.query({ query: GetAuthoritiesDocument }).then(res => ({ data: res.data.result }));
  return {
    type: ACTION_TYPES.FETCH_ROLES,
    payload,
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
