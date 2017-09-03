import App from '../containers/App';
import {Store} from 'redux';
import {IState} from 'models/store';
import Favorite from '../pages/Favorite';


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
      ],
    }],
  }
};