import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {IState} from "../../models/store";

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  location: any;
}


class Menu extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const page = this.props.location.pathname.replace('/', '');

    return (
      <div className={cx('menu')}>
        <Link to="/favorite" className={cx('item', 'item_favorite', {'item_active': page === 'favorite'})}>
          <div className={cx('inner')} />
        </Link>
        <Link to="/company/list" className={cx('item', 'item_company', {'item_active': page.indexOf('company') !== -1})}>
          <div className={cx('inner')} />
        </Link>
        <Link to="/profile" className={cx('item', 'item_profile', {'item_active': page === 'profile'})}>
          <div className={cx('inner')} />
        </Link>
      </div>
    );
  }
}

export default (connect as any)((state: IState) => ({
  location: state.routing.locationBeforeTransitions,
}))(Menu);
