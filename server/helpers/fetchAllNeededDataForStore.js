const fetchAllNeededDataForStore = (components, store, path) => {
  const dispatchAndPath = {
    dispatch: store.dispatch,
    path,
  };
  const actions = components
    .map(component => (component.fetchData ? component.fetchData(dispatchAndPath) : null))
    .map(promises => (
      Promise.all((promises || [])
        .map(p => p && new Promise(resolve => p.then(resolve).catch(resolve))))
    ));

  return Promise.all(actions);
};

export default fetchAllNeededDataForStore;
