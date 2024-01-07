// data fetch goes here

import { connectToDb } from './db';
import { Post, User } from './models';

//get all posts
export const getPosts = async (slug: string) => {
  try {
    connectToDb();
    const posts = await Post.find({ slug });
    return posts;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

//get all users
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

//get user by Id
export const getUserById = async (id: string) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error('Error fetching user');
  }
};
