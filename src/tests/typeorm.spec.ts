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
