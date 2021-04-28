import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFetch } from '../../slices/fetch';
import Loader from '../loader';
import Table from '../../components/table';
import NavBar from '../navBar';
import './style.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.data);

  useEffect(() => dispatch(getDataFetch()), []);

  if (isLoading)
    return (
      <div className="app">
        <Loader />
      </div>
    );

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path="/" component={Table} exact />
        <Route path="/:id" component={Table} />
      </Switch>
    </div>
  );
};
