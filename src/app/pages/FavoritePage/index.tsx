import * as React from 'react';
const {PureComponent} = React;
import CompanyList from '../../components/CompanyList';
import Layout from '../../components/Layout';
import {COMPANY_LIST} from '../../constants/company';


interface IProps {

}


class Favorite extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const list = COMPANY_LIST.filter(company => company.isFavorite);

    return (
      <Layout>
        <CompanyList list={list} />
      </Layout>
    );
  }
}

export default Favorite;
