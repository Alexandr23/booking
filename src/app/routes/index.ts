import App from '../containers/App';
import {Store} from 'redux';
import {IState} from 'models/store';
import Favorite from '../pages/Favorite';
import Company from '../pages/Company';
import Profile from '../pages/Profile';


export default (store: Store<IState>) => {
  return {
    childRoutes: [{
      path: '/',
      component: App,
      indexRoute: {onEnter: (nextState: any, replace: any) => replace('/favorite')},
      childRoutes: [
        {
          path: '/favorite',
          component: Favorite,
        },
        {
          path: '/company',
          component: Company,
        },
        {
          path: '/profile',
          component: Profile,
        },
      ],
    }],
  }
};