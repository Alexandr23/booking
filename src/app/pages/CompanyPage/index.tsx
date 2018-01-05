import * as React from 'react';
const {PureComponent} = React;
import Company from '../../components/Company';
import Layout from '../../components/Layout';
import {COMPANY_LIST} from '../../constants/company';


interface IProps {

}


class CompanyPage extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const company = COMPANY_LIST[0];

    return (
      <Layout>
        <Company company={company} />
      </Layout>
    );
  }
}

export default CompanyPage;
