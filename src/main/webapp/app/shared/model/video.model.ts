import { IUser } from 'app/shared/model/user.model';

export interface IVideo {
  id?: number;
  name?: string | null;
  url?: string | null;
  description?: string | null;
  title?: string | null;
  video?: IUser | null;
}

export const defaultValue: Readonly<IVideo> = {};
