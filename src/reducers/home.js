/* @flow */
import Immutable from "seamless-immutable";
import type { ImmutableObject } from "seamless-immutable";
import type { Home, Action } from "../types";
type State = Home;

const INITIAL_STATE: ImmutableObject<State> = Immutable({
  list: [],
});

export default (
  state: ImmutableObject<State> = INITIAL_STATE,
  action: Action,
): State => {
  switch (action.type) {
    case "FETCH_USERS":
      return state.merge({
        list: action.payload.data,
      });
    default:
      return Immutable.isImmutable(state) ? state : Immutable(state);
  }
};
