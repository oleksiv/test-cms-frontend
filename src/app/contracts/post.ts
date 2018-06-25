import {Category} from './category';

export class Post {
  public id: number;
  public title: string;
  public content: string;
  public excerpt: string;
  public alias: string;
  public image: number;
  public status: string;
  public created_at: string;
  public categories: any;
  public tags: any;
  public default_category: Category;
}
