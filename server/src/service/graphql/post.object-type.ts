/* eslint-disable max-classes-per-file */
/* eslint-disable id-blacklist */
import { Paginated } from './paginated.object-type';
import { PostDTO } from '../dto/post.dto';
import { Field, ObjectType, PartialType } from '@nestjs/graphql';
import { UserDTO } from '../dto/user.dto';
import { User } from './user.object-type';
import { CategoryDTO } from '../dto/category.dto';
import { Category } from './category.object-type';

@ObjectType()
export class PartialPost extends PartialType(PostDTO) {}

@ObjectType()
export class Post extends PartialPost {
    @Field(() => User, { nullable: true })
    author?: UserDTO;
    @Field(() => Category, { nullable: true })
    category?: CategoryDTO;

    @Field(() => String, { nullable: true })
    content?: string;
}

@ObjectType()
export class PaginatedPost extends Paginated(Post) {}
