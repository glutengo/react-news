import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from '../web/rest/post.controller';
import { PostRepository } from '../repository/post.repository';
import { PostService } from '../service/post.service';
import { PostResolver } from '../web/graphql/post.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([PostRepository])],
    controllers: [PostController],
    providers: [PostService, PostResolver],
    exports: [PostService],
})
export class PostModule {}
