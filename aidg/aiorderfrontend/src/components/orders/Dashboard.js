import React, { Fragment } from "react";
import Form from "./Form";
import Orders from "./Orders";
export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Orders />
    </Fragment>
  );
}
