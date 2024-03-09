import { Injectable, NotFoundException } from '@nestjs/common';

export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: '뉴진스 오피셜',
    title: 'dddd',
    content: '축가부르는 강민지',
    likeCount: 1000,
    commentCount: 9249239,
  },
  {
    id: 2,
    author: '뉴진스 오피셜',
    title: 'dddd',
    content: '축가부르는 asdf',
    likeCount: 1000,
    commentCount: 9249239,
  },
  {
    id: 3,
    author: '뉴진스 오피셜',
    title: 'dddd',
    content: '축가부르는 dd',
    likeCount: 1000,
    commentCount: 9249239,
  },
  {
    id: 4,
    author: '뉴진스 오피셜',
    title: 'dddd',
    content: '축가부르는 dd',
    likeCount: 1000,
    commentCount: 9249239,
  },
];

@Injectable()
export class PostsService {
  getAllposts() {
    return posts;
  }

  getPostById(id: number) {
    const post = posts.find((post) => post.id === +id);

    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  createPost(author, title, content) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return post;
  }

  updatePost(postId: number, author: string, title: string, content: string) {
    const post = posts.find((post) => post.id === postId);

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }
    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }

    posts = posts.map((prevPost) => (prevPost.id === +id ? post : prevPost));
  }

  deletePost(postId: number) {
    posts = posts.filter((post) => post.id !== postId);

    if (!posts) {
      throw new NotFoundException();
    }

    posts = posts.filter((post) => post.id !== postId);
  }
}
