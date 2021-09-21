import { ArgsType, Field, ObjectType, buildQuery, buildMutation } from 'graphql-typeop';
import {
  CreateUserArgsImpl,
  Mutation,
  PaginatedUser,
  Query,
  QueryGetUserArgs,
  QueryGetUsersArgs,
  UpdateUserArgsImpl,
  User,
  UserEdge,
} from 'app/graphql';

import * as Apollo from '@apollo/client';

@ObjectType()
export class BaseUser implements Partial<User> {
  id!: number;
  login!: string;
}

@ObjectType()
export class DetailUser extends BaseUser implements Partial<User> {
  email!: string;
  langKey!: string;
  firstName!: string;
  lastName!: string;
  createdDate!: Date;
  lastModifiedDate!: Date;
  lastModifiedBy!: string;
  authorities!: string[];
  activated!: boolean;
}

@ObjectType()
class GetUserQuery {
  @Field<Query, GetUserVars>({ aliasFor: 'getUser' })
  result!: DetailUser;
}

@ArgsType()
class GetUserVars implements QueryGetUserArgs {
  login!: string;
}

@ArgsType()
class GetUsersVars implements QueryGetUsersArgs {
  page?: number;
  size?: number;
  sort?: string;
}

@ObjectType()
class UserEdgeResult implements Partial<UserEdge> {
  node!: DetailUser;
}

@ObjectType()
class GetUsersResult implements PaginatedUser {
  edges!: UserEdgeResult[];
  totalCount!: number;
}

@ObjectType()
class GetUsersQuery {
  @Field<Query, GetUsersVars>({ aliasFor: 'getUsers' })
  result!: GetUsersResult;
}

@ArgsType()
class CreateUserVars {
  user!: CreateUserArgsImpl;
}

@ObjectType()
class CreateUserMutation {
  @Field<Mutation, CreateUserVars>({ aliasFor: 'createUser' })
  result!: DetailUser;
}

@ArgsType()
class UpdateUserVars {
  user!: UpdateUserArgsImpl;
}

@ObjectType()
class UpdateUserMutation {
  @Field<Mutation, UpdateUserVars>({ aliasFor: 'updateUser' })
  result!: DetailUser;
}

@ArgsType()
class DeleteUserVars {
  login!: string;
}

@ObjectType()
class DeleteUserMutation {
  @Field<Mutation, DeleteUserVars>({ aliasFor: 'deleteUser' })
  result!: BaseUser;
}

@ObjectType()
class GetAuthoritiesQuery {
  @Field<Query>({ aliasFor: 'getAuthorities' })
  result!: string[];
}

const usedClasses = [CreateUserArgsImpl, UpdateUserArgsImpl];

export const GetUsersDocument = buildQuery(GetUsersQuery, GetUsersVars);
export const GetUserDocument = buildQuery(GetUserQuery, GetUserVars);
export const CreateUserDocument = buildMutation(CreateUserMutation, CreateUserVars);
export const DeleteUserDocument = buildMutation(DeleteUserMutation, DeleteUserVars);
export const UpdateUserDocument = buildMutation(UpdateUserMutation, UpdateUserVars);
export const GetAuthoritiesDocument = buildQuery(GetAuthoritiesQuery);
