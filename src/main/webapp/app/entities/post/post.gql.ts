import { ArgsType, Field, ObjectType, buildQuery, buildMutation } from 'graphql-typeop';
import {
  CreatePostArgsImpl,
  Mutation,
  MutationCreatePostArgs,
  MutationDeletePostArgs,
  MutationUpdatePostArgs,
  PaginatedPost,
  Post,
  PostEdge,
  Query,
  QueryGetPostArgs,
  UpdatePostArgsImpl,
} from 'app/graphql';
import { BasePost, DetailPost, ListPost, PaginationVars } from 'app/graphql/graphql.common-types';

@ArgsType()
class GetPostVars implements QueryGetPostArgs {
  id!: number;
}

@ObjectType()
class GetPostQuery {
  @Field<Query, GetPostVars>({ aliasFor: 'getPost' })
  result!: DetailPost;
}

@ArgsType()
class GetPostsVars extends PaginationVars {
  category?: number;
}

@ObjectType()
class PostEdgeResult implements Partial<PostEdge> {
  node!: ListPost;
}

@ObjectType()
class GetPostsResult implements Partial<PaginatedPost> {
  edges!: PostEdgeResult[];
  totalCount?: number;
}

@ObjectType()
class GetPostsQuery {
  @Field<Query, GetPostsVars>({ aliasFor: 'getPosts' })
  result!: GetPostsResult;
}

@ArgsType()
export class CreatePostVars implements MutationCreatePostArgs {
  post!: CreatePostArgsImpl;
}

@ObjectType()
class CreatePostMutation {
  @Field<Mutation, CreatePostVars>({ aliasFor: 'createPost' })
  result!: DetailPost;
}

@ArgsType()
export class UpdatePostVars implements MutationUpdatePostArgs {
  post!: UpdatePostArgsImpl;
}

@ObjectType()
class UpdatePostMutation {
  @Field<Mutation, UpdatePostVars>({ aliasFor: 'updatePost' })
  result!: DetailPost;
}

@ArgsType()
class DeletePostVars implements MutationDeletePostArgs {
  id!: number;
}

@ObjectType()
class DeletePostMutation {
  @Field<Mutation, GetPostVars>({ aliasFor: 'deletePost' })
  result!: number;
}

export const GetPostDocument = buildQuery(GetPostQuery, GetPostVars);
export const GetPostsDocument = buildQuery(GetPostsQuery, GetPostsVars);
export const CreatePostDocument = buildMutation(CreatePostMutation, CreatePostVars);
export const UpdatePostDocument = buildMutation(UpdatePostMutation, UpdatePostVars);
export const DeletePostDocument = buildMutation(DeletePostMutation, DeletePostVars);

const usedClasses = [CreatePostArgsImpl, UpdatePostArgsImpl, ListPost];
