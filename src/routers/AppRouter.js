import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";

import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
