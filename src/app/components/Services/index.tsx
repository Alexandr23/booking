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

    this.setState({selected})
  }

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  renderItem = service => (
      <div key={service.id}
           onClick={event => this.toggleActive(service.id)}
           className={cx({
            services__item: true,
            services__item_active: this.isSelected(service.id),
           })}/>
  )

  render() {
    return (
      <div className={cx('services')}>
        <h2 className={cx('services__title')}>Услуги</h2>

        {this.props.list.length && (
            <div className={cx('services__list')}>
              {this.props.list.map(this.renderItem)}
            </div>
        )}
      </div>
    );
  }
}

export default Services;
