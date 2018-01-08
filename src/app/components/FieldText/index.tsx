import * as React from 'react';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  value?: string;
  className?: string;
  placeholder?: string;
}


class Field extends PureComponent<IProps> {
  props: IProps;

  render() {
    return (
        <input defaultValue={this.props.value}
               className={cx('field-text', this.props.className)}
               placeholder={this.props.placeholder}
               type="text"/>
    );
  }
}

export default Field;
