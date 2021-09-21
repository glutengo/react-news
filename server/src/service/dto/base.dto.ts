import { Field, InputType, ObjectType } from '@nestjs/graphql';

/**
 * A DTO base object.
 */
@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class BaseDTO {
    @Field({ nullable: false })
    id?: number;

    createdBy?: string;

    createdDate?: Date;

    lastModifiedBy?: string;

    lastModifiedDate?: Date;
}
