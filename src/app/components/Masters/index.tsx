import * as React from 'react';
const {PureComponent} = React;
import {IMaster} from '../../models/master';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


interface IProps {
  list: IMaster[];
}

interface IState {
  selected: number | boolean;
}


class Masters extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor(props) {
    super(props);

    this.state = {
        selected: false,
    };
  }

  toggleActive = (id: number) => {
    this.setState({selected: this.state.selected === id ? false : id});
  }

  reset = () => this.setState({selected: false});

  renderItem = ({id, name}: IMaster) => (
      <div key={id}
           onClick={event => this.toggleActive(id)}
           className={cx({
             master: true,
             master_active: this.state.selected === id,
             ['master_' + (id % 5 + 1)]: true,
           })}>
        <div className={cx('master__name')}>{name}</div>
      </div>
  )

  render() {
    return (
        <div className={cx('masters')}>
          <h2 className={cx('masters__title')}>
              Мастер
              {!!this.state.selected && <div className={cx('reset')} onClick={this.reset}>Сбросить</div>}
          </h2>

          {this.props.list.length && <div className={cx('masters__list')}>{this.props.list.map(this.renderItem)}</div>}
        </div>
    );
  }
}

export default Masters;
