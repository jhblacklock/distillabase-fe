/* @flow */
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => ({
  type: "FETCH_USERS",
  promise: (axios: any) => axios.get(API_URL),
});
