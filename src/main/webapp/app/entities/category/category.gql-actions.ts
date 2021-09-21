import { client } from 'app/config/apollo-client';
import {
  CreateCategoryDocument,
  DeleteCategoryDocument,
  GetCategoryDocument,
  GetCategoriesDocument,
  UpdateCategoryDocument,
  CreateCategoryArgs,
  UpdateCategoryArgs,
} from 'app/graphql';
import { ICategory } from 'app/shared/model/category.model';
import { ICrudDeleteAction, ICrudPutAction } from 'react-jhipster';
import { ACTION_TYPES } from './category.reducer';

export const getEntities = (page?, size?, sort?, bypassCache?) => {
  const payload = client
    .query({ query: GetCategoriesDocument, variables: { page, size, sort }, fetchPolicy: bypassCache ? 'no-cache' : 'cache-first' })
    .then(res => ({ data: res.data.result.edges.map(e => e.node), headers: { 'x-total-count': res.data.result.totalCount } }));
  return {
    type: ACTION_TYPES.FETCH_CATEGORY_LIST,
    payload,
  };
};

export const getEntity = id => {
  const payload = client
    .query({ query: GetCategoryDocument, variables: { id: parseInt(id, 10) } })
    .then(res => ({ data: res.data.result }));
  return {
    type: ACTION_TYPES.FETCH_CATEGORY,
    payload,
  };
};

function toCreateEntityArgs(entity: any): CreateCategoryArgs {
  return {
    id: entity.id,
    name: entity.name,
  };
}

function toUpdateEntityArgs(entity: any): UpdateCategoryArgs {
  return {
    id: entity.id,
    ...toCreateEntityArgs(entity),
  };
}

export const createEntity: ICrudPutAction<ICategory> = category => async dispatch => {
  const payload = client.mutate({ mutation: CreateCategoryDocument, variables: { category: toCreateEntityArgs(category) } });
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CATEGORY,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICategory> = category => async dispatch => {
  const payload = client.mutate({ mutation: UpdateCategoryDocument, variables: { category: toUpdateEntityArgs(category) } });
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CATEGORY,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICategory> = id => async dispatch => {
  const payload = client.mutate({ mutation: DeleteCategoryDocument, variables: { id } });
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CATEGORY,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
