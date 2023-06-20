import React, { FC } from 'react';
// import { useGetPostsQuery } from '../../../service/api';
// import { Post } from '../../../types/Post';
import PostCard from '../../card/PostCard';

const Home: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  // const { data: postData, isLoading: postDataIsLoading } = useGetPostsQuery();
  // console.log(postData);

  return (
    <div {...props}>
      <h1>Home</h1>
      {/* postDataIsLoading ? <p>Loading</p> : postData.map((post: Post) => <p key={post.id}>{post.title.rendered}</p>) */}
      <PostCard
        postTitle={`Post Title 1`}
        postCategory={['cat 1', 'cat 2']}
        postDescription="This Post is cool!"
        postDate="20-09-2023"
      ></PostCard>
      <PostCard
        postTitle={`Post Title 2`}
        postCategory={['cat 1', 'cat 2']}
        postDescription="This Post is cool!"
        postDate="20-09-2023"
      ></PostCard>
      <PostCard
        postTitle={`Post Title 4`}
        postCategory={['cat 1', 'cat 2', 'cat 3', 'cat 4']}
        postDescription="This Post is cool!"
        postDate="20-09-2023"
      ></PostCard>
    </div>
  );
};

export default Home;
