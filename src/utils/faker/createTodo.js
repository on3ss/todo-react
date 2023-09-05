import { faker } from '@faker-js/faker';

export default function createTodo() {
    return {
        title: faker.lorem.sentence({
            min: 2,
            max: 4
        }),
        description: faker.lorem.paragraph(),
        tags: faker.helpers.arrayElements([0, 1, 2, 3]),
        isDone: faker.datatype.boolean()
    }
}