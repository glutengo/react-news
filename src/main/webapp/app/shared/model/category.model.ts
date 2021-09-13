import { IPost } from 'app/shared/model/post.model';

export interface ICategory {
  id?: number;
  name?: string | null;
  posts?: IPost[] | null;
}

export const defaultValue: Readonly<ICategory> = {};
