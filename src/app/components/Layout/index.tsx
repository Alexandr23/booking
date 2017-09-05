import * as React from 'react';
const {PureComponent} = React;
import Menu from '../Menu';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
}


class Layout extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <div className={cx('layout')}>
        <div className={cx('layout__content')}>{this.props.children}</div>
        <div className={cx('layout__menu')}><Menu /></div>
      </div>
    );
  }
}

export default Layout;
