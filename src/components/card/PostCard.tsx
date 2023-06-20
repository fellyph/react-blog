import React, { FC } from 'react';
import { Post } from '../../types/Post';
import styled from '@emotion/styled';

type PostCardProps = {
  postTitle: string;
  postDescription: string;
  postDate: string;
  postCategory: string[];
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

const PostCard: FC<PostCardProps> = ({ postTitle, postCategory, postDate, postDescription }) => {
  return (
    <StylePostCard>
      <StyledPostCardHeader>
        <StyledPostCardTitle>{postTitle}</StyledPostCardTitle>
        <StyledPostCardMeta>
          <span>{postDate}</span>
          <StyledPostCategories>
            {postCategory.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </StyledPostCategories>
        </StyledPostCardMeta>
      </StyledPostCardHeader>
      <div>{postDescription}</div>
    </StylePostCard>
  );
};

export default PostCard;
