import React, { FC } from 'react';
import { Post } from '../../types/Post';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: Post;
  excerpt?: boolean;
};

const StylePostCard = styled('div')`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} auto;
`;

const StyledPostCardTitle = styled('h2')`
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 0;
`;

const StyledPostCategories = styled('div')`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  li {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.2rem 0.4rem;
  }
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

const PostCard: FC<PostCardProps> = ({ post, excerpt = false }) => {
  return (
    <StylePostCard>
      <StyledPostCardHeader>
        <StyledPostCardTitle>
          <Link to={`post/${post.id}`}>{post.title.rendered}</Link>
        </StyledPostCardTitle>
        <StyledPostCardMeta>
          <span>{post.date_gmt}</span>
          <StyledPostCategories>
            {post.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </StyledPostCategories>
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
