/* eslint-disable max-classes-per-file */
/* eslint-disable id-blacklist */
import { Paginated } from './paginated.object-type';
import { CategoryDTO } from '../dto/category.dto';
import { Field, ObjectType, PartialType } from '@nestjs/graphql';
import { PostDTO } from '../dto/post.dto';
import { Post } from './post.object-type';

@ObjectType()
export class PartialCategory extends PartialType(CategoryDTO) {}

@ObjectType()
export class Category extends PartialCategory {
    @Field(() => [Post], { nullable: true })
    posts?: PostDTO[];
}

@ObjectType()
export class PaginatedCategory extends Paginated(Category) {}
