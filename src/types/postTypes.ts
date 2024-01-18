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

// export type FormData = {
//   title: string;
//   description: string;
//   slug: string;
//   userId: string;
//   img: File;
// };

// interface FormDataItem {
//   name: string;
//   value: string | File | string[];
// }

// interface FormDataState {
//   items: FormDataItem[];
// }

// export interface FormData {
//   states: FormDataState[];
// }
