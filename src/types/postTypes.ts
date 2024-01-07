export type Post = {
  post: {
    username: string;
    title: string;
    description: string;
    img?: string;
    slug: string;
  };
};

export type Posts = Post[];
