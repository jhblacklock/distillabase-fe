/* @flow */

import type { Dispatch } from "./types";
import { fetchUsers } from "./actions/users";
import { fetchUser } from "./actions/user";
import HomePage from "./containers/Home";
import UserInfoPage from "./containers/UserInfo";
import NotFoundPage from "./containers/NotFound";

export default [
  {
    path: "/",
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchUsers()), // Register your server-side call action(s) here
      ]),
  },
  {
    path: "/UserInfo/:id",
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) =>
      Promise.all([dispatch(fetchUser(params.id))]),
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];
