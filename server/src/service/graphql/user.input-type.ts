/* eslint-disable max-classes-per-file*/
import { UserDTO } from '../dto/user.dto';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
class FullUserInput extends UserDTO {}

@InputType()
class PartialUserInput extends PartialType(FullUserInput) {}

@InputType()
export class UserReference extends PartialUserInput {
    id: number;
}

@InputType()
export class CreateUserArgs extends PartialUserInput {
    email: string;
    login: string;
    authorities: string[];
    @Field({ nullable: true })
    password: string;
}

@InputType()
export class UpdateUserArgs extends CreateUserArgs {
    id: number;
}
