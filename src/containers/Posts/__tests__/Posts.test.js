import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from '../index';

describe('Containers: <Posts />', () => {
  test('should render correctly <Posts />', () => {
    const props = {
      posts: {
        userId: 1,
        id: 2,
        title: 'title',
        body: 'body',
      },
      fetchPosts: jest.fn(),
    };
    const wrapper = shallow(<Posts {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should not re render component if nextProps is equal to oldProps', () => {
    const props = {
      posts: {
        userId: 1,
        id: 2,
        title: 'title',
        body: 'body',
      },
      fetchPosts: jest.fn(),
    };
    const wrapper = shallow(<Posts {...props} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(props);
    expect(shouldUpdate).toBe(false);
  });

  test('should return an array of dispatched actions once call static fetchData', () => {
    const props = {
      posts: {
        userId: 1,
        id: 2,
        title: 'title',
        body: 'body',
      },
      fetchPosts: jest.fn(),
    };
    const wrapper = shallow(<Posts {...props} />);
    const s = wrapper;
    console.log(s);
  });
});
