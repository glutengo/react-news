import { ArgsType, Field, ObjectType } from 'graphql-typeop';
import { User, Post, Category } from 'app/graphql';

@ArgsType()
export class PaginationVars {
  page?: number;
  size?: number;
  sort?: string;
}

@ObjectType()
export class BaseUser implements Partial<User> {
  id!: number;
  login!: string;
}

@ObjectType()
export class BaseCategory implements Partial<Category> {
  id!: number;
  name!: string;
}

@ObjectType()
export class BasePost implements Partial<Post> {
  id!: number;
  title!: string;
  content!: string;
  coverImageUrl!: string;
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
export class DetailCategory extends BaseCategory implements Partial<Category> {}

@ObjectType()
export class DetailPost extends BasePost implements Partial<Post> {
  author!: BaseUser;
  category!: BaseCategory;
}

@ObjectType()
export class ListPost extends DetailPost implements Partial<Post> {
  @Field<Post>({ args: { length: 50 }, aliasFor: 'content'})
  excerpt!: string;
  @Field({skip: true})
  content!: string;
}
