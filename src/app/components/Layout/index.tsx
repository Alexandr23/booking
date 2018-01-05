import * as React from 'react';
const {PureComponent} = React;
import Menu from '../Menu';
import {Link} from 'react-router';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
  title: string;
  back?: string;
}


class Layout extends PureComponent<IProps> {
  props: IProps;

  render() {
    return (
      <div className={cx('layout', {layout_back: !!this.props.back})}>
        <div className={cx('layout__header')}>
            {this.props.back && <Link to={this.props.back} className={cx('layout__back')}></Link>}
            <div className={cx('layout__logo')}>Booking</div>
        </div>
        <div className={cx('layout__content')}>{this.props.children}</div>
        <div className={cx('layout__menu')}><Menu /></div>
      </div>
    );
  }
}

export default Layout;
