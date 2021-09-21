import { client } from 'app/config/apollo-client';
import {
  CreatePostDocument,
  DeletePostDocument,
  GetPostDocument,
  GetPostsDocument,
  UpdatePostDocument,
  CreatePostArgs,
  UpdatePostArgs,
} from 'app/graphql';
import { IPost } from 'app/shared/model/post.model';
import { ICrudDeleteAction, ICrudPutAction } from 'react-jhipster';
import { ACTION_TYPES } from './post.reducer';

export const getEntities = (page?, size?, sort?, bypassCache?) => {
  const payload = client
    .query({ query: GetPostsDocument, variables: { page, size, sort }, fetchPolicy: bypassCache ? 'no-cache' : 'cache-first' })
    .then(res => ({ data: res.data.result.edges.map(e => e.node), headers: { 'x-total-count': res.data.result.totalCount } }));
  return {
    type: ACTION_TYPES.FETCH_POST_LIST,
    payload,
  };
};

export const getEntity = id => {
  const payload = client.query({ query: GetPostDocument, variables: { id: parseInt(id, 10) } }).then(res => ({ data: res.data.result }));
  return {
    type: ACTION_TYPES.FETCH_POST,
    payload,
  };
};

function toCreateEntityArgs(entity: any): CreatePostArgs {
  return {
    id: entity.id,
    title: entity.title,
    content: entity.content,
    coverImageUrl: entity.coverImageUrl,
    author: entity.author,
    category: entity.category,
  };
}

function toUpdateEntityArgs(entity: any): UpdatePostArgs {
  return {
    id: entity.id,
    ...toCreateEntityArgs(entity),
  };
}

export const createEntity: ICrudPutAction<IPost> = post => async dispatch => {
  const payload = client.mutate({ mutation: CreatePostDocument, variables: { post: toCreateEntityArgs(post) } });
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_POST,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IPost> = post => async dispatch => {
  const payload = client.mutate({ mutation: UpdatePostDocument, variables: { post: toUpdateEntityArgs(post) } });
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_POST,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IPost> = id => async dispatch => {
  const payload = client.mutate({ mutation: DeletePostDocument, variables: { id } });
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_POST,
    payload,
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
