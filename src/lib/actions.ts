'use server';

// import { FormData } from '@/types/postTypes';
import { revalidatePath } from 'next/cache';
import { connectToDb } from './db';
import { Post } from './models';

// Server actions
export const addPost = async (formData: any) => {
  const { title, description, slug, userId, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
      img,
    });

    await newPost.save();

    //revalidate the blog page after adding a new post
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to database');
  }
};

export const removePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);

    //revalidate the blog page after deleting a post
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to database');
  }
};
