export type Post = {
  title: string;
  description: string;
  userId: string;
  img: string;
  slug: string;
  _id: any;
  createdAt: Date;
};

export type Posts = Post[];
