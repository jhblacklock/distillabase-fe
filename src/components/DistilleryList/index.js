/* @flow */

import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

type Props = { list: Array<Object> };

const DistilleryList = ({ list }: Props) => (
  <div className={styles.List}>
    <h4>Distillery List</h4>
    <ul>
      {list.map(user => (
        <li key={user.id}>
          <Link to={`/UserInfo/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DistilleryList;
