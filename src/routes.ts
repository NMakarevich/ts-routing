import { Route } from './router/interfaces';
import Home from './components/home';
import About from './components/about';
import Settings from './components/settings';
import NotFoundPage from './router/404';

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/settings', component: Settings },
  { path: '404', component: NotFoundPage },
];

export default routes;
