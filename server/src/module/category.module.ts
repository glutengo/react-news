import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from '../web/rest/category.controller';
import { CategoryRepository } from '../repository/category.repository';
import { CategoryService } from '../service/category.service';
import { PostModule } from './post.module';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryRepository]), forwardRef(() => PostModule)],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [CategoryService],
})
export class CategoryModule {}
