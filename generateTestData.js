const faker = require('faker');

const categoryNames = ['Sports', 'Art', 'Politics', 'Finance'];

const posts = [];

for (let i = 0; i < 100; i++) {
  posts.push({
    title: faker.random.words(5),
    content: faker.random.words(100) + '\n\n' + faker.random.words(100) + '\n\n' + faker.random.words(100) + '\n\n' + faker.random.words(100),
    category: categoryNames[Math.floor(Math.random() * categoryNames.length)],
    coverImageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/480`
  });
}

console.log(posts);
