export type ApiResponsePosts = {
  _id: any;
  userId: string;
  title: string;
  description: string;
  img: string;
  slug: string;
  createdAt: Date;
};

export type ApiResponseUsers = {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
};
