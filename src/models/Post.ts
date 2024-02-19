export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface AuthoredPost extends Post {
  author: string;
}

export interface NewPost {
  title: string;
  body: string;
}