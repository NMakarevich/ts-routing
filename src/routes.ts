import { Route } from './router/interfaces';
import Home from './components/home';
import About from './components/about';
import Settings from './components/settings';

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/settings', component: Settings },
];

export default routes;
