import React from 'react';
import { Col } from 'reactstrap';
import { ICategory } from 'app/shared/model/category.model';
import { Link } from 'react-router-dom';
import { PostItem } from '../post/post-item';

import './category-item.scss';

export interface ICategoryItemProps { category: ICategory }

export const CategoryItem = (props: ICategoryItemProps) => {
  const { category } = props;

  return (
    <div className="category-item">
      <h3 className="category-item-title">
        <Link to={`category/${category.id}`} color="link">
          {category.name}
        </Link>
      </h3>
      { category.posts && <div className="category-item-posts d-flex py-2">
        {
          category.posts.map(p => (<Col key={p.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch flex-shrink-0"><PostItem post={p}/></Col>))
        }
        </div>}
    </div>
  )
}
