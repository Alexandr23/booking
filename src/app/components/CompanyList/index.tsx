import * as React from 'react';
const {PureComponent} = React;
import CompanyCard from '../CompanyCard';
import {ICompany} from '../../models/company';
import {Link} from 'react-router';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  list: ICompany[];
}


class CompanyList extends PureComponent<IProps> {
  props: IProps;

  render() {
    return (
      <div className={cx('list')}>
        {this.props.list.length && this.props.list.map(company =>
          <Link className={cx('item')} to={`/company/${company.id}/booking`}>
            <CompanyCard key={company.id} company={company} link />
          </Link>
        )}
      </div>
    );
  }
}

export default CompanyList;
