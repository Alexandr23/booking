import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {ICompany} from '../../models/company';
import Rating from '../../components/Rating';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  company: ICompany;
  link?: boolean;
}


class CompanyCard extends PureComponent<IProps> {
  props: IProps;

  render() {
    const image_mod = this.props.company.id % 3 + 1;
    const {id, rating, title, address, schedule, phone} = this.props.company;

    return (
      <div className={cx('company')}>
        <div className={cx('inner')}>
          <div className={cx('company__image')}>
            <div className={cx('image', 'image_' + image_mod)} />
            <div className={cx('company__rating')}>
              <Rating rating={rating}/>
            </div>
          </div>

          <div className={cx('content')}>
            <div className={cx('title-block')}>
              <h1 className={cx('title')}>{title}</h1>
              {this.props.link && <div className={cx('arrow')} />}
            </div>

            {address && <div className={cx('info', 'info_address')}>{address}</div>}

            {phone && <div className={cx('info', 'info_phone')}>{phone}</div>}

            {schedule && <div className={cx('info', 'info_schedule')}>{
              schedule.map((item, i) => <p key={i}>{item}</p>)
            }</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyCard;
