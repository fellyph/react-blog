import React, { FC } from 'react';
import { useGetPostsQuery } from '../../../service/api';
import { Post } from '../../../types/Post';
import PostCard from '../../card/PostCard';

const Home: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { data: postData, isLoading: postDataIsLoading } = useGetPostsQuery();
  console.log(postData);

  return (
    <div {...props}>
      <h1>Home</h1>
      {postDataIsLoading ? <p>Loading</p> : postData.map((post: Post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default Home;
