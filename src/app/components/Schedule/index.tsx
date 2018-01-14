import * as React from 'react';
const {PureComponent} = React;
import {IScheduleDay, TSchedule} from '../../models/schedule';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  schedule: TSchedule;
}

interface IState {
  activeDayId: string | boolean;
  activeSlotId: number | boolean;
}


class Schedule extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor (props, state) {
    super(props, state);

    this.state = {
      activeDayId: false,
      activeSlotId: false,
    };
  }

  onChangeDay = (id) => {
    this.setState({
      activeDayId: id,
      activeSlotId: false,
    });
  }

  onChangeSlot = (id) => {
    this.setState({activeSlotId: id});
  }

  renderDay = ({id, day, weekday, isToday, slots}: IScheduleDay) => (
    <div key={id}
         className={cx({
           day: true,
           day_today: isToday,
           day_active: id === this.state.activeDayId,
         })}
         onClick={() => this.onChangeDay(id)}>
      <p className={cx('day__day')}>{day}</p>
      <p className={cx('day__weekday')}>{weekday}</p>
    </div>
  )

  renderSlot = ({id, value}) => (
    <div className={cx({
      slot: true,
      slot_active: id === this.state.activeSlotId,
    })} onClick={() => this.onChangeSlot(id)}>
      {value}
    </div>
  )

  render() {
    const {schedule} = this.props;
    const activeDays = schedule.filter(day => day.id === this.state.activeDayId);
    const slots = activeDays.length !== 0 ? activeDays[0].slots : schedule[0].slots;

    return (
      <div className={cx('schedule')}>
        <h2 className={cx('schedule__title')}>Время</h2>

        {schedule.length !== 0 && <div className={cx('days')}>{schedule.map(this.renderDay)}</div>}
        {slots.length !== 0 && <div className={cx('slots')}>{slots.map(this.renderSlot)}</div>}

        {schedule.length === 0 && 'Нет расписания'}
      </div>
    );
  }
}

export default Schedule;
