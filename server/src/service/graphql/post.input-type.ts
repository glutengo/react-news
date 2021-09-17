/* eslint-disable max-classes-per-file */
import { ArgsType, Field, HideField, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { PostDTO } from '../dto/post.dto';
import { UserDTO } from '../dto/user.dto';
import { UserReference } from './user.input-type';
import { CategoryDTO } from '../dto/category.dto';
import { CategoryReference } from './category.input-type';
import { PaginationArgs } from '../../web/graphql/pagination-util';

@InputType()
class FullPostInput extends PostDTO {}

@InputType()
class PartialPostInput extends OmitType(PartialType(FullPostInput), []) {
    @Field(() => UserReference)
    author: UserDTO;
    @Field(() => CategoryReference)
    category: CategoryDTO;
}

@InputType()
export class PostReference extends PartialPostInput {
    id: number;
}

@InputType()
export class CreatePostArgs extends PartialPostInput {
    title: string;
    content: string;
    coverImageUrl: string;
}

@InputType()
export class UpdatePostArgs extends CreatePostArgs {
    id: number;
    @Field(() => UserReference, { nullable: true })
    author: UserDTO;
    @Field(() => CategoryReference, { nullable: true })
    category: CategoryDTO;
}

@ArgsType()
export class GetPostsArgs extends PaginationArgs {
    category?: number;
}
