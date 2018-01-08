import App from '../containers/App';
import {Store} from 'redux';
import {IState} from 'models/store';
import FavoritePage from '../pages/FavoritePage';
import CompanyListPage from '../pages/CompanyListPage';
import CompanyPage from '../pages/CompanyPage';
import CompanyBookingPage from '../pages/CompanyBookingPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';


export default (store: Store<IState>) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      indexRoute: {onEnter: (nextState: any, replace: any) => replace('/favorite')},
      childRoutes: [
        {
          path: '/login',
          component: LoginPage,
        },
        {
          path: '/favorite',
          component: FavoritePage,
        },
        {
          path: '/company/list',
          component: CompanyListPage,
        },
        {
          path: '/company/:id/booking',
          component: CompanyBookingPage,
        },
        {
          path: '/company/:id',
          component: CompanyPage,
        },
        {
          path: '/profile',
          component: ProfilePage,
        },
      ],
    }],
  }
};