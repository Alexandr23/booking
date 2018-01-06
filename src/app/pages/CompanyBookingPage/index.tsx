import * as React from 'react';
const {PureComponent} = React;
import CompanyCard from '../../components/CompanyCard';
import Layout from '../../components/Layout';
import Services from '../../components/Services';
import Masters from '../../components/Masters';
import {COMPANY_LIST} from '../../constants/company';
import {MASTER_LIST} from '../../constants/master';
import {SERVICE_LIST} from '../../constants/services';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  params: any;
}


class CompanyBookingPage extends PureComponent<IProps> {
  props: IProps;

  render() {
    const company = COMPANY_LIST[this.props.params.id - 1];

    console.log(this.props);

    return (
      <Layout title="Компания" back="/favorite">
        <CompanyCard company={company} />

        <div className={cx('booking')}>
          <div className={cx('services')}>
            <Services list={SERVICE_LIST} />
          </div>

          <div className={cx('masters')}>
            <Masters list={MASTER_LIST} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default CompanyBookingPage;
