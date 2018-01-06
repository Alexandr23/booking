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
  selected: number[];
}


class Masters extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor(props) {
    super(props);

    this.state = {
      selected: [],
    }
  }

  toggleActive = (id: number) => {
    let selected = [...this.state.selected];

    let index = selected.indexOf(id);

    if (index === -1) {
      selected.push(id);
    } else {
      selected.splice(index, 1);
    }

    this.setState({selected})
  }

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  renderItem = master => (
      <div key={master.id}
           onClick={event => this.toggleActive(master.id)}
           className={cx({
            masters__item: true,
            masters__item_active: this.isSelected(master.id),
           })}>

      </div>
  )

  render() {
    return (
      <div className={cx('masters')}>
        <h2 className={cx('masters__title')}>Мастера</h2>

        {this.props.list.length && (
            <div className={cx('masters__list')}>
              {this.props.list.map(this.renderItem)}
            </div>
        )}
      </div>
    );
  }
}

export default Masters;
