import './home.scss';

import React, { useEffect } from 'react';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import { getEntities as getPosts } from '../../entities/post/post.reducer';
import { getEntities as getCategories } from '../../entities/category/category.reducer';
import { PostItem } from 'app/entities/post/post-item';
import { CategoryItem } from 'app/entities/category/category-item';
import { POSTS_PER_CATEGORY } from 'app/shared/util/pagination.constants';

export interface IHomeProp extends StateProps, DispatchProps {}

export const Home = (props: IHomeProp) => {
  const { account, posts, categories } = props;

  useEffect(() => {
    props.getPosts(0, POSTS_PER_CATEGORY);
    props.getCategories(0, 20, null, POSTS_PER_CATEGORY);
  }, []);

  return (
    <Col md="10" className="m-auto">
      <Row className="justify-content-center">
        <h2 className="display-4">
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h2>
      </Row>
      <div>
        <h2 className="display-5 mb-4">
          <Translate contentKey="home.latest">Latest Posts</Translate>
        </h2>
        <Row className="px-2 d-flex align-items-stretch">
          { posts.map(p => (<Col key={p.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch"><PostItem post={p}/></Col>))}
        </Row>
      </div>
      <div>
        <h2 className="display-5 mb-4">
          <Translate contentKey="home.categories">Categories</Translate>
        </h2>
        <div>
          { categories.map(c => (<CategoryItem key={c.id} category={c}/>))}
        </div>
      </div>
    </Col>
  );
};

const mapStateToProps = (storeState: IRootState)  => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  posts: storeState.post.entities,
  categories: storeState.category.entities
});

const mapDispatchToProps = {
  getPosts,
  getCategories
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
