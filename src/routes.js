import React from 'react';
import { retry } from './utils/helper';

const Overview = React.lazy(() => retry(() => import('./containers/Overview')));
const Campaigns = React.lazy(() =>
  retry(() => import('./containers/Campaigns'))
);
const Create = React.lazy(() => retry(() => import('./containers/Create')));

const routes = [
  { path: '/', exact: true, name: 'Overview', component: Overview },
  {
    path: '/Campaigns',
    exact: true,
    name: 'Campaigns',
    component: Campaigns,
  },
  {
    path: '/create',
    exact: true,
    name: 'Create',
    component: Create,
  },
];

export default routes;
