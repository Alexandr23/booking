import * as React from 'react';
const {PureComponent} = React;
import CompanyList from '../../components/CompanyList';
import Layout from '../../components/Layout';


interface IProps {

}


class Company extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <Layout>
        <CompanyList />
      </Layout>
    );
  }
}

export default Company;