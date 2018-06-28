import App from '../containers/App';
import Home from '../containers/Home';
import Posts from '../containers/Posts';

const routes = [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
      },
      {
        component: Posts,
        path: '/',
      },
    ],
  },
];

export default routes;
