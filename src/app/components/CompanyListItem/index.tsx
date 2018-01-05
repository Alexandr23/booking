import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  company: any;
}


class CompanyListItem extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const image_mod = this.props.company.id % 3 + 1;

    return (
      <Link to={`/company/${this.props.company.id}`} className={cx('company')}>
        <div className={cx('inner')}>
          <div className={cx('image', 'image_' + image_mod)} />

          <div className={cx('content')}>
            <div className={cx('title-block')}>
              <h1 className={cx('title')}>{this.props.company.title}</h1>
              <div className={cx('actions')} />
            </div>
            {/*<div className={cx('description')}>{this.props.company.description}</div>*/}
          </div>
        </div>
      </Link>
    );
  }
}

export default CompanyListItem;
