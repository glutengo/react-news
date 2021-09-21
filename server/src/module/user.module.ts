import { Module } from '@nestjs/common';
import { UserController } from '../web/rest/user.controller';
import { ManagementController } from '../web/rest/management.controller';
import { UserRepository } from '../repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../service/user.service';
import { UserResolver } from '../web/graphql/user.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [UserController, ManagementController],
    providers: [UserService, UserResolver],
    exports: [UserService],
})
export class UserModule {}
