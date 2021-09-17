import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { getSortState, JhiItemCount, JhiPagination, Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity as getCategory } from './category.gql-actions';
import { getEntities as getPosts } from '../post/post.gql-actions';
import { PostItem } from '../post/post-item';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICategoryDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CategoryDetail = (props: ICategoryDetailProps) => {
  const history = useHistory();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  useEffect(() => {
    const categoryId = parseInt(props.match.params.id, 10);
    props.getCategory(categoryId);
    props.getPosts(
      paginationState.activePage - 1,
      paginationState.itemsPerPage,
      `${paginationState.sort},${paginationState.order}`,
      null,
      categoryId
    );
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  const { category, posts, totalItems } = props;
  return (
    <Row className="justify-content-center">
      <Col md="10" className="m-auto">
        {category && (
          <div>
            <Row className="align-items-center">
              <Button
                tag={Link}
                replace
                color="link"
                className="mr-2 align-self-start"
                data-cy="entityDetailsBackButton"
                onClick={() => history.goBack()}
              >
                <FontAwesomeIcon icon="arrow-left" />{' '}
              </Button>
              <h2 data-cy="categoryDetailsHeading">{category.name}</h2>
            </Row>
            <hr />
            {posts && (
              <Row>
                {posts.map(p => (
                  <Col key={p.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                    <PostItem post={p} />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        )}
        {posts && posts.length && (
          <div>
            <Row className="justify-content-center">
              <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
            </Row>
            <Row className="justify-content-center">
              <JhiPagination
                activePage={paginationState.activePage}
                onSelect={handlePagination}
                maxButtons={5}
                itemsPerPage={paginationState.itemsPerPage}
                totalItems={props.totalItems}
              />
            </Row>
          </div>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ category, post }: IRootState) => ({
  category: category.entity,
  posts: post.entities,
  totalItems: post.totalItems,
});

const mapDispatchToProps = { getCategory, getPosts };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
