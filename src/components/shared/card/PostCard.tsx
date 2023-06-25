import React, { FC } from 'react';
import { Post } from '../../../types/Post';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: Post;
  excerpt?: boolean;
  isSingle?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const StylePostCard = styled('div')`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} auto;
`;

const StyledPostCardTitle = styled('h2')`
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 0;
`;

const StyledPostCardHeader = styled('header')`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
`;

const StyledPostCardMeta = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PostCard: FC<PostCardProps> = ({ post, excerpt = false, isSingle = false, ...restProps }) => {
  const date = new Date(post.date_gmt);
  const formattedDate = date.toLocaleDateString('en-US');

  return (
    <StylePostCard {...restProps}>
      <StyledPostCardHeader>
        <StyledPostCardTitle>
          {isSingle ? post.title.rendered : <Link to={`post/${post.id}`}>{post.title.rendered}</Link>}
        </StyledPostCardTitle>
        <StyledPostCardMeta>
          <span>{formattedDate}</span>
        </StyledPostCardMeta>
      </StyledPostCardHeader>
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: excerpt ? post.excerpt.rendered : post.content.rendered }}
      />
    </StylePostCard>
  );
};

export default PostCard;
