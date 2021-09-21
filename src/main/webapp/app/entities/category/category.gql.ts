import { ArgsType, Field, ObjectType, buildQuery, buildMutation } from 'graphql-typeop';
import {
  CreateCategoryArgsImpl,
  Mutation,
  MutationCreateCategoryArgs,
  MutationDeleteCategoryArgs,
  MutationUpdateCategoryArgs,
  PaginatedCategory,
  Category,
  CategoryEdge,
  Query,
  QueryGetCategoryArgs,
  UpdateCategoryArgsImpl,
} from 'app/graphql';
import { BaseCategory, DetailCategory, PaginationVars } from 'app/graphql/graphql.common-types';

@ArgsType()
class GetCategoryVars implements QueryGetCategoryArgs {
  id!: number;
}

@ObjectType()
class GetCategoryQuery {
  @Field<Query, GetCategoryVars>({ aliasFor: 'getCategory' })
  result!: DetailCategory;
}

@ArgsType()
class GetCategoriesVars extends PaginationVars {}

@ObjectType()
class CategoryEdgeResult implements Partial<CategoryEdge> {
  node!: DetailCategory;
}

@ObjectType()
class GetCategoriesResult implements Partial<PaginatedCategory> {
  edges!: CategoryEdgeResult[];
  totalCount?: number;
}

@ObjectType()
class GetCategoriesQuery {
  @Field<Query, GetCategoriesVars>({ aliasFor: 'getCategories' })
  result!: GetCategoriesResult;
}

@ArgsType()
export class CreateCategoryVars implements MutationCreateCategoryArgs {
  category!: CreateCategoryArgsImpl;
}

@ObjectType()
class CreateCategoryMutation {
  @Field<Mutation, CreateCategoryVars>({ aliasFor: 'createCategory' })
  result!: DetailCategory;
}

@ArgsType()
export class UpdateCategoryVars implements MutationUpdateCategoryArgs {
  category!: UpdateCategoryArgsImpl;
}

@ObjectType()
class UpdateCategoryMutation {
  @Field<Mutation, UpdateCategoryVars>({ aliasFor: 'updateCategory' })
  result!: DetailCategory;
}

@ArgsType()
class DeleteCategoryVars implements MutationDeleteCategoryArgs {
  id!: number;
}

@ObjectType()
class DeleteCategoryMutation {
  @Field<Mutation, GetCategoryVars>({ aliasFor: 'deleteCategory' })
  result!: number;
}

export const GetCategoryDocument = buildQuery(GetCategoryQuery, GetCategoryVars);
export const GetCategoriesDocument = buildQuery(GetCategoriesQuery, GetCategoriesVars);
export const CreateCategoryDocument = buildMutation(CreateCategoryMutation, CreateCategoryVars);
export const UpdateCategoryDocument = buildMutation(UpdateCategoryMutation, UpdateCategoryVars);
export const DeleteCategoryDocument = buildMutation(DeleteCategoryMutation, DeleteCategoryVars);

const usedClasses = [CreateCategoryArgsImpl, UpdateCategoryArgsImpl];
