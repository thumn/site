import React from "react";
import { Route } from "react-router";
/**
 * Import all page components here
 */
import App from "./App";
import Photography from "./pages/photography";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/photography" component={Photography} />
    {/* <Route path="/some/otherpage" component={SomeOtherPage} /> */}
  </Route>
);
