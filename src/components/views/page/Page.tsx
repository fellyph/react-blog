import React, { FC } from 'react';
import { useGetPageQuery } from '../../../service/api';
import { useParams } from 'react-router-dom';
import PostCard from '../../shared/card/PostCard';
import { Loader } from '../../shared/Atoms';
import { Page } from '../../../types/Page';

const Page: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { id } = useParams();
  const { data: pageData, isLoading: pageDataIsLoading } = useGetPageQuery(id);

  return (
    <div {...props}>
      {pageDataIsLoading ? <Loader>Loading...</Loader> : <PostCard className="page" post={pageData as Page} isSingle />}
    </div>
  );
};

export default Page;
