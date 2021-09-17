import { ArgsType } from 'graphql-typeop/decorators';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Category = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};


export type CategoryPostsArgs = {
  take?: Maybe<Scalars['Int']>;
};

export type CategoryEdge = {
  cursor?: Maybe<Scalars['String']>;
  node: Category;
};

export type CategoryReference = {
  id: Scalars['Int'];
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type CreatePostArgs = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  coverImageUrl: Scalars['String'];
  author: UserReference;
  category: CategoryReference;
};

export type CreateUserArgs = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  login: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  activated?: Maybe<Scalars['Boolean']>;
  langKey?: Maybe<Scalars['String']>;
  authorities: Array<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  activationKey?: Maybe<Scalars['String']>;
  resetKey?: Maybe<Scalars['String']>;
  resetDate?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
};


export type Mutation = {
  createUser: User;
  updateUser: User;
  deleteUser: User;
  createPost: Post;
  updatePost: Post;
  deletePost: Scalars['Int'];
  createCategory: Category;
  updateCategory: Category;
  deleteCategory: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  user: CreateUserArgs;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserArgs;
};


export type MutationDeleteUserArgs = {
  login: Scalars['String'];
};


export type MutationCreatePostArgs = {
  post: CreatePostArgs;
};


export type MutationUpdatePostArgs = {
  post: UpdatePostArgs;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationCreateCategoryArgs = {
  category: CreateCategoryArgs;
};


export type MutationUpdateCategoryArgs = {
  category: UpdateCategoryArgs;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int'];
};

export type PaginatedCategory = {
  edges: Array<CategoryEdge>;
  totalCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type PaginatedPost = {
  edges: Array<PostEdge>;
  totalCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type PaginatedUser = {
  edges: Array<UserEdge>;
  totalCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Post = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  category?: Maybe<Category>;
};


export type PostContentArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type PostEdge = {
  cursor?: Maybe<Scalars['String']>;
  node: Post;
};

export type Query = {
  getUsers: PaginatedUser;
  getUser: User;
  getAuthorities: Array<Scalars['String']>;
  getPosts: PaginatedPost;
  getPost: Post;
  getCategories: PaginatedCategory;
  getCategory: Category;
};


export type QueryGetUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  login: Scalars['String'];
};


export type QueryGetPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
};


export type QueryGetPostArgs = {
  id: Scalars['Int'];
};


export type QueryGetCategoriesArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int'];
};

export type Subscription = {
  usersUpdated: Scalars['Int'];
  postsUpdated: Scalars['Int'];
  categoriesUpdated: Scalars['Int'];
};

export type UpdateCategoryArgs = {
  id: Scalars['Int'];
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type UpdatePostArgs = {
  id: Scalars['Int'];
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['String'];
  coverImageUrl: Scalars['String'];
  author?: Maybe<UserReference>;
  category?: Maybe<CategoryReference>;
};

export type UpdateUserArgs = {
  id: Scalars['Int'];
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  login: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  activated?: Maybe<Scalars['Boolean']>;
  langKey?: Maybe<Scalars['String']>;
  authorities: Array<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  activationKey?: Maybe<Scalars['String']>;
  resetKey?: Maybe<Scalars['String']>;
  resetDate?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
};

export type User = {
  id?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  login?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
  langKey?: Maybe<Scalars['String']>;
  authorities?: Maybe<Array<Scalars['String']>>;
  imageUrl?: Maybe<Scalars['String']>;
  activationKey?: Maybe<Scalars['String']>;
  resetKey?: Maybe<Scalars['String']>;
  resetDate?: Maybe<Scalars['DateTime']>;
};

export type UserEdge = {
  cursor?: Maybe<Scalars['String']>;
  node: User;
};

export type UserReference = {
  id: Scalars['Int'];
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  login?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
  langKey?: Maybe<Scalars['String']>;
  authorities?: Maybe<Array<Scalars['String']>>;
  imageUrl?: Maybe<Scalars['String']>;
  activationKey?: Maybe<Scalars['String']>;
  resetKey?: Maybe<Scalars['String']>;
  resetDate?: Maybe<Scalars['DateTime']>;
};


@ArgsType('CategoryReference')
export class CategoryReferenceImpl implements CategoryReference {
  id!: Scalars["Int"];
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
}

@ArgsType('UserReference')
export class UserReferenceImpl implements UserReference {
  id!: Scalars["Int"];
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  login?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  activated?: Maybe<Scalars["Boolean"]>;
  langKey?: Maybe<Scalars["String"]>;
  authorities!: Scalars["String"][];
  imageUrl?: Maybe<Scalars["String"]>;
  activationKey?: Maybe<Scalars["String"]>;
  resetKey?: Maybe<Scalars["String"]>;
  resetDate?: Maybe<Scalars["DateTime"]>;
}

@ArgsType('CreateCategoryArgs')
export class CreateCategoryArgsImpl implements CreateCategoryArgs {
  id?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  name!: Scalars["String"];
}

@ArgsType('CreatePostArgs')
export class CreatePostArgsImpl implements CreatePostArgs {
  id?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  title!: Scalars["String"];
  content!: Scalars["String"];
  coverImageUrl!: Scalars["String"];
  author!: UserReferenceImpl;
  category!: CategoryReferenceImpl;
}

@ArgsType('CreateUserArgs')
export class CreateUserArgsImpl implements CreateUserArgs {
  id?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  login!: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email!: Scalars["String"];
  activated?: Maybe<Scalars["Boolean"]>;
  langKey?: Maybe<Scalars["String"]>;
  authorities!: Scalars["String"][];
  imageUrl?: Maybe<Scalars["String"]>;
  activationKey?: Maybe<Scalars["String"]>;
  resetKey?: Maybe<Scalars["String"]>;
  resetDate?: Maybe<Scalars["DateTime"]>;
  password?: Maybe<Scalars["String"]>;
}

@ArgsType('UpdateCategoryArgs')
export class UpdateCategoryArgsImpl implements UpdateCategoryArgs {
  id!: Scalars["Int"];
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  name!: Scalars["String"];
}

@ArgsType('UpdatePostArgs')
export class UpdatePostArgsImpl implements UpdatePostArgs {
  id!: Scalars["Int"];
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  title!: Scalars["String"];
  content!: Scalars["String"];
  coverImageUrl!: Scalars["String"];
  author?: Maybe<UserReferenceImpl>;
  category?: Maybe<CategoryReferenceImpl>;
}

@ArgsType('UpdateUserArgs')
export class UpdateUserArgsImpl implements UpdateUserArgs {
  id!: Scalars["Int"];
  createdBy?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["DateTime"]>;
  lastModifiedBy?: Maybe<Scalars["String"]>;
  lastModifiedDate?: Maybe<Scalars["DateTime"]>;
  login!: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email!: Scalars["String"];
  activated?: Maybe<Scalars["Boolean"]>;
  langKey?: Maybe<Scalars["String"]>;
  authorities!: Scalars["String"][];
  imageUrl?: Maybe<Scalars["String"]>;
  activationKey?: Maybe<Scalars["String"]>;
  resetKey?: Maybe<Scalars["String"]>;
  resetDate?: Maybe<Scalars["DateTime"]>;
  password?: Maybe<Scalars["String"]>;
}