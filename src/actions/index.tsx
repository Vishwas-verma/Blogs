import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () =>
  async (dispatch: any) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({type: "FETCH_POSTS", payload: response.data})
  };

export const fetchUsers = (id: any) => async (dispatch: any) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: "FETCH_USER", payload: response.data})
};
