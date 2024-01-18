import { connectToDb } from '@/lib/db';
import { Post } from '@/lib/models';
import { Params } from '@/types/types';
import { NextResponse } from 'next/server';

export const GET = async (req: unknown, params: Params) => {
  const { slug } = params;
  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post');
  }
};

export const DELETE = async (req: unknown, params: Params) => {
  const { slug } = params;
  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json('Successfully deleted');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to remove post');
  }
};
