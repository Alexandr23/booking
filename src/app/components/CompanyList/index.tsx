import * as React from 'react';
const {PureComponent} = React;
import Company from '../Company';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {

}


class CompanyList extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const list:any = [
      {id: 1, title: 'Парикмахерская', description: 'Тут должно быть описание компании.'},
      {id: 2, title: 'Столовка', description: 'Тут должно быть описание компании.'},
      {id: 3, title: 'Салон красоты', description: 'Тут должно быть описание компании.'},
      {id: 4, title: 'СТО', description: 'Тут должно быть описание компании.'},
      {id: 5, title: 'Парикмахерская', description: 'Тут должно быть описание компании.'},
      {id: 6, title: 'Салон красоты', description: 'Тут должно быть описание компании.'},
      {id: 7, title: 'СТО', description: 'Тут должно быть описание компании.'},
      {id: 8, title: 'Парикмахерская', description: 'Тут должно быть описание компании.'},
      {id: 9, title: 'Салон красоты', description: 'Тут должно быть описание компании.'},
      {id: 10, title: 'СТО', description: 'Тут должно быть описание компании.'},
      {id: 11, title: 'Парикмахерская', description: 'Тут должно быть описание компании.'},
    ];

    return (
      <div className={cx('list')}>
        {list.map(item => <Company key={item.id} company={item} />)}
      </div>
    );
  }
}

export default CompanyList;
