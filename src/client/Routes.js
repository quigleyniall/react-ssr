import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import UsersList, { loadData } from './pages/UsersListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';
import AdminsListPage from './pages/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/users',
        ...UsersList
      },
      {
        path: '/admins',
        ...AdminsListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
