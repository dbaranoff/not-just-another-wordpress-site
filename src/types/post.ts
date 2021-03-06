import { ITag } from './tag';
import { IUserPreview } from './user';

export interface IPostCreateRequest {
  text: string; // (length: 6-50, preview only)
  image: string; // (url)
  likes: number; // (init value: 0)
  tags: ITag | null; // (string)
  owner: IUserPreview['id']; // (User id)
}

export interface IPostPreview {
  id: string; // (autogenerated)
  text: string; // (length: 6-50, preview only)
  image: string; // (url)
  likes: number; // (init value: 0)
  tags: ITag; // (string)
  publishDate: string; // (autogenerated)
  owner: IUserPreview; // (User Preview)
}

export interface IPost {
  id: string; // (autogenerated)
  text: string; // (length: 6-1000)
  image: string; // (url)
  likes: number; // (init value: 0)
  link: string; // (url, length: 6-200)
  tags: ITag;
  publishDate; // : string(autogenerated)
  owner: IUserPreview; // (User Preview)
}
