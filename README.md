Added a test example using [nestjs-typeorm-testing](https://github.com/devniel/nestjs-typeorm-testing). By now, it's necessary to install.

- @nestjs/typeorm
- @nestjs/common
- @nestjs/core
- rxjs

Todo:

- Replace nestjs-typeorm-testing with a module only about typeorm to avoid installing the modules mentioned above.

### Test example

The example is [here](https://github.com/devniel/example-typeorm-testing), you don't need even PostgreSQL installed on your machine to check if a hook on your entities is called or not.

```ts
import {
  createFakeConnection,
  FakeConnection
} from "@devniel/nestjs-typeorm-testing";
import { Category } from "../entity/Category";
import { Post } from "../entity/Post";

describe("test", () => {
  let connection: FakeConnection;

  beforeAll(async () => {
    connection = await createFakeConnection({
      name: "test",
      type: "postgres",
      entities: [Category, Post]
    });
  });

  it("should invoke the before and after hooks before creating a new category", async () => {
    let category = new Category();
    category.name = "A new category";
    const spyBeforeInsert = spyOn(category, "beforeInsert");
    const spyAfterInsert = spyOn(category, "afterInsert");
    const repository = connection.getRepository(Category);
    await repository.save(category);
    console.log(`Category has been saved. Category is '${category.name}'`);
    expect(spyBeforeInsert).toHaveBeenCalled();
    expect(spyAfterInsert).toHaveBeenCalled();
  });
});
```

# Example how to use TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. enjoy!

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands
