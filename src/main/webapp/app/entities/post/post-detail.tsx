import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './post.gql-actions';

import './post-detail.scss';

export interface IPostDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PostDetail = (props: IPostDetailProps) => {
  const history = useHistory();

  useEffect(() => {
    props.getEntity(parseInt(props.match.params.id, 10));
  }, []);

  const { postEntity } = props;
  return (
    <Row className="justify-content-center post-detail">
      {postEntity && (
        <Col md="12 " className="d-flex align-items-center flex-column">
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
          <h2 className="display-4 text-center my-4">{postEntity.title}</h2>
          <Row className="align-self-stretch">
            <img className="mt-4" width="100%" height="400px" src={postEntity.coverImageUrl} />
          </Row>
          <div className="post-detail-meta my-4 text-center">
            {postEntity.author && (
              <span className="post-item-author">
                published by <i>{postEntity.author.login} </i>
              </span>
            )}
            {postEntity.category && (
              <span className="post-item-category">
                in <i>{postEntity.category.name}</i>
              </span>
            )}
          </div>
          <div className="post-detail-content text-justify col-md-8">{postEntity.content}</div>
        </Col>
      )}
    </Row>
  );
};

const mapStateToProps = ({ post }: IRootState) => ({
  postEntity: post.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
