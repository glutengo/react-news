import React, { useEffect } from 'react';
import { IPost } from 'app/shared/model/post.model';
import { Link } from 'react-router-dom';
import './post-item.scss';

export interface IPostItemProps { post: IPost }

export const PostItem = (props: IPostItemProps) => {
  const { post } = props;
  return (
    <div className="post-item">
      <img className="post-item-image" src={post.coverImageUrl}/>
      <div className="post-item-data">
        <h4 className="post-item-title">
          <Link to={`/post/${post.id}`} color="link">
            {post.title}
          </Link>
        </h4>
        {post.author && <span className="post-item-author">published by <i>{post.author.login} </i></span>}
        {post.category && <span className="post-item-category">in <i>{post.category.name}</i></span>}
        <p className="post-item-excerpt">{post.excerpt}...</p>
      </div>
    </div>
  )
}


