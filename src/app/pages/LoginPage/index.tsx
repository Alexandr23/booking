import * as React from 'react';
const {PureComponent} = React;
import FieldText from '../../components/FieldText';
import Button from '../../components/Button';
import Layout from '../../components/Layout';


interface IProps {

}


class LoginPage extends PureComponent<IProps> {
  props: IProps;

  render() {
    return (
      <Layout title="Авторизация">
          <form action="">
              <FieldText placeholder="Введите телефон" />
              <Button>Получить код</Button>
          </form>
      </Layout>
    );
  }
}

export default LoginPage;
