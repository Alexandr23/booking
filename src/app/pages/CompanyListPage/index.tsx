import * as React from 'react';
const {PureComponent} = React;
import CompanyList from '../../components/CompanyList';
import Layout from '../../components/Layout';
import {COMPANY_LIST} from '../../constants/company';


interface IProps {

}


class Company extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <Layout>
        <CompanyList list={COMPANY_LIST} />
      </Layout>
    );
  }
}

export default Company;
