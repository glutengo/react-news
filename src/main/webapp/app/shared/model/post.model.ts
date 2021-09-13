import { IUser } from 'app/shared/model/user.model';
import { ICategory } from 'app/shared/model/category.model';

export interface IPost {
  id?: number;
  title?: string | null;
  content?: string | null;
  coverImageUrl?: string | null;
  author?: IUser | null;
  category?: ICategory | null;
  excerpt?: string | null;
}

export const defaultValue: Readonly<IPost> = {};
