/* eslint-disable max-classes-per-file */

import { Field, HideField, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CategoryDTO } from '../dto/category.dto';
import { PostDTO } from '../dto/post.dto';
import { PostReference } from './post.input-type';

@InputType()
class FullCategoryInput extends CategoryDTO {}

@InputType()
class PartialCategoryInput extends OmitType(PartialType(FullCategoryInput), ['posts']) {
    @HideField()
    posts;
}

@InputType()
export class CategoryReference extends PartialCategoryInput {
    id: number;
}

@InputType()
export class CreateCategoryArgs extends PartialCategoryInput {
    name: string;
}

@InputType()
export class UpdateCategoryArgs extends CreateCategoryArgs {
    id: number;
}
