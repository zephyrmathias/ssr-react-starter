import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';

export class Posts extends React.Component {
  static fetchData({ dispatch }) {
    return [
      dispatch(fetchPosts()),
    ];
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  shouldComponentUpdate(nextProps) {
    const { posts } = this.props;
    return posts !== nextProps.posts;
  }

  render() {
    const { posts } = this.props;
    const { userId, id, title, body } = posts;
    return (
      <div>
        <h1>POST</h1>
        <h2>UserId: {userId}</h2>
        <h4>Id: {id}</h4>
        <h4>Title: {title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
