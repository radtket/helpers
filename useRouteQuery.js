export const useRouteQuery = query => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(query);
};
