import React from "react";
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridRow } from "semantic-ui-react";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
