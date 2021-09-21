/* eslint-disable id-blacklist */
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, ResolveField, Mutation, Parent, Subscription } from '@nestjs/graphql';
import { CategoryService } from '../../service/category.service';
import { PaginationArgs } from './pagination-util';
import { CreateCategoryArgs, UpdateCategoryArgs } from '../../service/graphql/category.input-type';
import { Category, PaginatedCategory } from '../../service/graphql/category.object-type';
import { PageRequest } from '../../domain/base/pagination.entity';
import { pageRequestToFindManyOptions } from './pagination-util';
import { PubSubService } from '../../service/graphql/pub-sub.service';
import { AuthGuard, RolesGuard } from '../../security';
import { transformField } from './field-resolver-util';

@UseGuards(AuthGuard, RolesGuard)
@Resolver(() => Category)
export class CategoryResolver {
    constructor(private categoryService: CategoryService, private pubSub: PubSubService) {}

    @Query(() => PaginatedCategory)
    async getCategories(@Args() options: PaginationArgs): Promise<PaginatedCategory> {
        const pageRequest: PageRequest = new PageRequest(options.page, options.size, options.sort);
        return this.categoryService
            .findAndCount(pageRequestToFindManyOptions(pageRequest))
            .then(([results, count]) => new PaginatedCategory(results, count, true));
    }

    @Query(() => Category)
    async getCategory(@Args('id') id: number): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Mutation(() => Category)
    async createCategory(@Args('category') category: CreateCategoryArgs): Promise<Category> {
        return await this.categoryService.save(category);
    }

    @Mutation(() => Category)
    async updateCategory(@Args('category') category: UpdateCategoryArgs): Promise<Category> {
        return await this.categoryService.update(category);
    }

    @Mutation(() => Number)
    async deleteCategory(@Args('id') id: number): Promise<number> {
        await this.categoryService.deleteById(id);
        return id;
    }

    @Subscription(() => Number)
    categoriesUpdated(): AsyncIterator<Number> {
        return this.pubSub.asyncIterator('categories');
    }
}
