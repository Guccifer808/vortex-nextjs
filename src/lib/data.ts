// data fetch goes here
import { connectToDb } from './db';
import { Post, User } from './models';
// for no-cache(unstable?). Usage: noStoreCache() before trycatch block
import { unstable_noStore as noStoreCache } from 'next/cache';
import { ApiResponsePosts, ApiResponseUsers } from '@/types/responseTypes';

//get all posts
export const getPosts = async (): Promise<ApiResponsePosts[]> => {
  try {
    connectToDb();
    const posts = await Post.find().lean();
    return posts as ApiResponsePosts[];
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

// get post by slug
export const getPost = async (slug: string): Promise<ApiResponsePosts> => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug }).lean();
    return post as ApiResponsePosts;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

//get all users
export const getUsers = async (): Promise<ApiResponseUsers[]> => {
  try {
    connectToDb();
    const users = await User.find();
    return users as ApiResponseUsers[];
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

//get user by Id
export const getUserById = async (id: string): Promise<ApiResponseUsers> => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user as ApiResponseUsers;
  } catch (error) {
    throw new Error('Error fetching user');
  }
};
