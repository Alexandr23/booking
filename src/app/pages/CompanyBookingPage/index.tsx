import * as React from 'react';
const {PureComponent} = React;
import CompanyCard from '../../components/CompanyCard';
import Layout from '../../components/Layout';
import Services from '../../components/Services';
import Masters from '../../components/Masters';
import Schedule from '../../components/Schedule';
import Button from '../../components/Button';
import {COMPANY_LIST} from '../../constants/company';
import {MASTER_LIST} from '../../constants/master';
import {SERVICE_LIST} from '../../constants/services';
import {SCHEDULE} from '../../constants/schedule';

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

        <div className={cx('booking')}>
          <div className={cx('company')}>
            <CompanyCard company={company} />
          </div>

          <div className={cx('section')}>
            <Services list={SERVICE_LIST} />
          </div>

          <div className={cx('section')}>
            <Masters list={MASTER_LIST} />
          </div>

          <div className={cx('section')}>
            <Schedule schedule={SCHEDULE} />
          </div>

          <div className={cx('booking__button')}>
            <Button>Записаться</Button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CompanyBookingPage;
