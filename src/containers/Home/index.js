/* @flow */

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import type { Connector } from "react-redux";
import Helmet from "react-helmet";

import * as actionUsers from "../../actions/users";
import type { Home as HomeType, Dispatch, ReduxState } from "../../types";
import UserList from "../../components/UserList";
import styles from "./styles.scss";

type Props = { home: HomeType, fetchUsers: () => void };

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserList = () => {
    const { home } = this.props;

    if (!home.list) {
      return <p>Loading...</p>;
    }

    return <UserList list={home.list} />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderUserList()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ home }: ReduxState) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchUsers: () => dispatch(actionUsers.fetchUsers()),
  }),
);

export default connector(Home);
