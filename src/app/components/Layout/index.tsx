import * as React from 'react';
const {PureComponent} = React;

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
        <div className={cx('content')}>{this.props.children}</div>
        <div className={cx('menu')}></div>
      </div>
    );
  }
}

export default Layout;
