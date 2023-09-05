import { faker } from '@faker-js/faker';
import categories from '../todoCategory'

export default function createTodo() {
    return {
        title: faker.lorem.sentence({
            min: 2,
            max: 4
        }),
        description: faker.lorem.paragraph(),
        categories: faker.helpers.arrayElements(categories),
        isDone: faker.datatype.boolean()
    }
}