import {Tag} from "../tags/tag";

export class Post {
  public id: number;
  public title: string;
  public alias: string;
  public content: string;
  public tags: Tag[];
}
