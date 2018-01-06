import * as React from 'react';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


interface IProps {
  rating: number;
}

class Rating extends PureComponent<IProps> {
  props: IProps;

  render() {
    let rating = [];

    [1, 2, 3, 4, 5].map(item => rating.push(this.props.rating >= item));

    return (
      <div className={cx('rating')}>
        {rating.map((flag, i) => <div key={i} className={cx({rating__item: true, rating__item_active: flag})} />)}
      </div>
    );
  }
}

export default Rating;
