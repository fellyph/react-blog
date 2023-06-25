import React, { FC } from 'react';
import { useGetPostQuery } from '../../../service/api';
import { useParams } from 'react-router-dom';
import { Post } from '../../../types/Post';
import PostCard from '../../card/PostCard';

const Post: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { id } = useParams();
  const { data: postData, isLoading: postDataIsLoading } = useGetPostQuery(id);

  return <div {...props}>{postDataIsLoading ? <p>Loading</p> : <PostCard post={postData as Post} />}</div>;
};

export default Post;
