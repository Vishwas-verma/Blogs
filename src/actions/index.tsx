import jsonPlaceholder from "../apis/jsonPlaceholder";
import * as _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch: any, getState: any) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUsers(id)));
};

export const fetchPosts = () =>
  async (dispatch: any) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({type: "FETCH_POSTS", payload: response.data})
  };

export const fetchUsers = (id: any) => async (dispatch: any) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: "FETCH_USER", payload: response.data})
};
