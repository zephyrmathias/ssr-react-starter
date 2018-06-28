import { matchRoutes } from 'react-router-config';

const getMatchedComponents = (routes, path) => {
  const allMatchedComponents = matchRoutes(routes, path)
    .map(({ route }) => (
      !route.component.preload
        ? route.component
        : route.component.preload().then(response => response.default)
    ));
  return Promise.all(allMatchedComponents);
};

export default getMatchedComponents;
