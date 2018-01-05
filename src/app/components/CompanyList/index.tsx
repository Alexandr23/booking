import * as React from 'react';
const {PureComponent} = React;
import CompanyListItem from '../CompanyListItem';
import {ICompany} from '../../models/company';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  list: ICompany[];
}


class CompanyList extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <div className={cx('list')}>
        {this.props.list.length && this.props.list.map(company => <CompanyListItem key={company.id} company={company} />)}
      </div>
    );
  }
}

export default CompanyList;
