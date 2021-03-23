import React from "react";
import {Post} from "../../utils/types/types";
import styled from "styled-components";

function PostsList({postsList}: { postsList: Array<Post> }) {
  return (
    <>
      {postsList.map(post => {
        return <PostBlock key={post.question_id} href={post.link}>
          <PostOwner>
            {post.owner.profile_image && <ImageBlock>
                <img src={post.owner.profile_image}/>
            </ImageBlock>
            }
            <PostName>
              {post.owner.display_name}
            </PostName>
          </PostOwner>

          <PostTitle>
            {post.title}
          </PostTitle>
        </PostBlock>
      })}
    </>
  );
}

const PostOwner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const PostTitle = styled.div`
  text-decoration: underline;
  color: #555;
`

const PostName = styled.div`
  margin-left: 20px;
`

const ImageBlock = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`

const PostBlock = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;


  color: #333;
  text-decoration: none;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export default PostsList;
