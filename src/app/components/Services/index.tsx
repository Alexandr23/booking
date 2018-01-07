import * as React from 'react';
const {PureComponent} = React;
import {IService} from '../../models/service';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


interface IProps {
  list: IService[];
}

interface IState {
  selected: number[];
}


class Services extends PureComponent<IProps, IState> {
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

    this.setState({selected});
  }

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  reset = () => this.setState({selected: []});

  renderItem = ({id, title, cost}: IService) => (
      <div key={id}
           onClick={event => this.toggleActive(id)}
           className={cx({
            service: true,
            service_active: this.isSelected(id),
           })}>
        <div className={cx('service__icon', 'service__icon_' + (id % 4 + 1))} />
        <div className={cx('service__price')}>{`${cost} р.`}</div>
        <div className={cx('service__name')}>{title}</div>
      </div>
  )

  render() {
    const count = this.state.selected.length;

    return (
      <div className={cx('services')}>
        <h2 className={cx('services__title')}>
            Услуги
            {count !== 0 && <div className={cx('count')}>{count}</div>}
            {count !== 0 && <div className={cx('reset')} onClick={this.reset}>Сбросить</div>}
        </h2>

        {this.props.list.length && <div className={cx('services__list')}>{this.props.list.map(this.renderItem)}</div>}
      </div>
    );
  }
}

export default Services;
