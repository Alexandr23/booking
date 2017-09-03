import * as React from 'react';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  company: any;
}


class Company extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <div className={cx('company')}>
        <div className={cx('inner')}>
          <div className={cx('image')} />

          <div className={cx('content')}>
            <h1 className={cx('title')}>{this.props.company.title}</h1>
            {/*<div className={cx('description')}>{this.props.company.description}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
