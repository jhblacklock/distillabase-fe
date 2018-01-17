/* @flow */
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = (userId: string) => ({
  type: "FETCH_USER",
  promise: (httpClient: any) => httpClient.get(`${API_URL}/${userId}`),
});
