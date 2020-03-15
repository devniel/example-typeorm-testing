import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  BeforeInsert,
  BaseEntity,
  AfterInsert
} from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @BeforeInsert()
  public async beforeInsert(): Promise<void> {
    console.log("beforeInsert");
  }

  @AfterInsert()
  public async afterInsert(): Promise<void> {
    console.log("afterInsert");
  }
}
