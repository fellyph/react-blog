import React, { FC } from 'react';
import { useGetPostsQuery } from '../../../service/api';
import { Post } from '../../../types/Post';
import PostCard from '../../shared/card/PostCard';
import { Loader } from '../../shared/Atoms';

const Home: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { data: postData, isLoading: postDataIsLoading } = useGetPostsQuery();

  return (
    <div {...props}>
      {postDataIsLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        postData.map((post: Post) => <PostCard excerpt key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Home;
