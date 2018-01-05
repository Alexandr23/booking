import * as React from 'react';
const {PureComponent} = React;
import CompanyList from '../../components/CompanyList';
import Layout from '../../components/Layout';


interface IProps {

}


class Profile extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <Layout title="Профиль">
        Профиль пользователя
      </Layout>
    );
  }
}

export default Profile;
