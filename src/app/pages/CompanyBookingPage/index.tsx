import * as React from 'react';
const {PureComponent} = React;
import Company from '../../components/Company';
import Layout from '../../components/Layout';
import Services from '../../components/Services';
import {COMPANY_LIST} from '../../constants/company';
import {SERVICE_LIST} from '../../constants/services';


interface IProps {

}


class CompanyBookingPage extends PureComponent<IProps> {
  props: IProps;

  render() {
    const company = COMPANY_LIST[0];

    return (
      <Layout title="Компания" back="/favorite">
        {/*<Company company={company} />*/}

        <Services list={SERVICE_LIST} />
      </Layout>
    );
  }
}

export default CompanyBookingPage;
