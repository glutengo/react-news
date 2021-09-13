import { MigrationInterface, getRepository } from 'typeorm';
import { Post } from '../domain/post.entity';
import { User } from '../domain/user.entity';
import { Category } from '../domain/category.entity';
import { categoryNames, posts } from '../data';

export class SeedCategoriesAndPosts1570200490073 implements MigrationInterface {

 // eslint-disable-next-line
  public async up(): Promise<any> {
        const categories: Category[] = [];
        categoryNames.forEach(name => {
          categories.push({
            name,
            createdBy: 'user',
            createdDate: new Date(),
            posts: []
          })
        });

        const categoryRepository = getRepository('category');
        const savedCategories = await categoryRepository.save(categories);

        const userRepository = getRepository<User>('nhi_user');
        const user = await userRepository.findOne({login: 'user'});

        const postEntities: Post[] = [];

        posts.forEach(p => {
          postEntities.push({
            ...p,
            category: savedCategories.find(c => c.name === p.category),
            createdBy: 'user',
            createdDate: new Date(),
            author: user
          })
        })

        const postRepository = getRepository('post');
        await postRepository.save(postEntities);
    }

    // eslint-disable-next-line
  public async down(): Promise<any> {}
}
