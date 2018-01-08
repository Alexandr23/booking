import * as React from 'react';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  size?: string;
  children?: any;
  className?: string;
}


class Button extends PureComponent<IProps> {
  props: IProps;

  render() {
    const {size, children} = this.props;

    return (
        <button className={cx(this.props.className, {
          button: true,
          ['button_size' + size]: size,
        })}>{children}</button>
    );
  }
}

export default Button;
