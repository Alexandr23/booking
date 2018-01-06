import * as React from 'react';
const {PureComponent} = React;
import Helmet from 'react-helmet';


interface IProps {
  children: any;
}


class App extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <div>
        <Helmet defaultTitle="Booking" titleTemplate="%s | Booking"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
