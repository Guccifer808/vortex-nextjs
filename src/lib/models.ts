import mongoose from 'mongoose';

// Schema for posts
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 24,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    userId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

//Schema for users
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 24,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 42,
    },
    password: {
      type: String,
      required: true,
      mix: 8,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//use existing models or create a new one
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
