import * as React from 'react';
const {PureComponent} = React;
import {ICompany} from '../../models/company';
//import { GoogleMap } from "react-google-maps";

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  company: ICompany;
}


class Company extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const {company} = this.props;

    return (
      <div className={cx('company')}>
        <div className={cx('header')}>
          <h1 className={cx('title')}>{company.title}</h1>
        </div>

        <p className={cx('description')}>{company.description}</p>

        <section className={cx('section')}>
          <h2 className={cx('section-title')}>Изображения</h2>

          <div className={cx('images')}>
            {[1,2,3,4,5,6,7,8,9].map(id => <div key={id} className={cx('image', `image_${id % 3 + 1}`)} />)}
          </div>
        </section>

        <section className={cx('section')}>
          <h2 className={cx('section-title')}>На карте</h2>

          <div className={cx('images')}>
              {/*<GoogleMap/>*/}
          </div>
        </section>
      </div>
    );
  }
}

export default Company;
